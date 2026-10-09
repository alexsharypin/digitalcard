import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';
import { AchievementsService } from '../src/achievements/achievements.service.js';

const PROFILE_QUERY = `
  query {
    profile {
      name
      description
      github
      linkedin
      skills {
        name
      }
      experience {
        company
        position
        startYear
        startMonth
        achievements {
          description
        }
      }
      projects {
        name
        url
      }
    }
  }
`;

interface ProfileResponse {
  data: {
    profile: {
      name: string;
      description: string;
      github: string;
      linkedin: string;
      skills: { name: string }[];
      experience: {
        company: string;
        position: string;
        startYear: number;
        startMonth: number;
        achievements: { description: string }[];
      }[];
      projects: { name: string; url: string }[];
    };
  };
  errors?: unknown[];
}

describe('GraphQL profile (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const queryProfile = async (): Promise<ProfileResponse> => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query: PROFILE_QUERY })
      .expect(200);

    return response.body as ProfileResponse;
  };

  it('returns the seeded profile with nested data', async () => {
    const { data, errors } = await queryProfile();

    expect(errors).toBeUndefined();

    const { profile } = data;
    expect(profile.name).not.toBe('');
    expect(profile.description).not.toBe('');
    expect(profile.github).toMatch(/^https:\/\/github\.com\//);
    expect(profile.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);

    expect(profile.skills.length).toBeGreaterThan(0);
    expect(profile.projects.length).toBeGreaterThan(0);
    expect(profile.experience.length).toBeGreaterThan(0);

    for (const experience of profile.experience) {
      expect(experience.achievements.length).toBeGreaterThan(0);
    }
  });

  it('returns experience ordered from the most recent', async () => {
    const { data } = await queryProfile();

    const starts = data.profile.experience.map(
      ({ startYear, startMonth }) => startYear * 12 + startMonth,
    );

    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it('loads achievements of all experiences with a single query', async () => {
    const findByExperienceIds = vi.spyOn(
      app.get(AchievementsService),
      'findByExperienceIds',
    );

    const { data } = await queryProfile();

    expect(findByExperienceIds).toHaveBeenCalledTimes(1);
    expect(findByExperienceIds.mock.calls[0][0]).toHaveLength(
      data.profile.experience.length,
    );
  });
});
