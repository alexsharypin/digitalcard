import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Achievement } from './achievement.model.js';
import { AchievementsService } from './achievements.service.js';

@Injectable({ scope: Scope.REQUEST })
export class AchievementsDataLoader {
  private readonly loader: DataLoader<number, Achievement[]>;

  constructor(private readonly achievementsService: AchievementsService) {
    this.loader = new DataLoader(async (experienceIds) => {
      const achievements = await this.achievementsService.findByExperienceIds([
        ...experienceIds,
      ]);

      const byExperienceId = new Map<number, Achievement[]>(
        experienceIds.map((id) => [id, []]),
      );

      for (const achievement of achievements) {
        byExperienceId.get(achievement.experienceId)?.push(achievement);
      }

      return experienceIds.map((id) => byExperienceId.get(id) ?? []);
    });
  }

  load(experienceId: number): Promise<Achievement[]> {
    return this.loader.load(experienceId);
  }
}
