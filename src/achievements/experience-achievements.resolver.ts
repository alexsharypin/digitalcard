import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Achievement } from './achievement.model.js';
import { AchievementsDataLoader } from './achievements.dataloader.js';
import { Experience } from '../experiences/experience.model.js';

@Resolver(() => Experience)
export class ExperienceAchievementsResolver {
  constructor(
    private readonly achievementsDataLoader: AchievementsDataLoader,
  ) {}

  @ResolveField(() => [Achievement])
  async achievements(@Parent() experience: Experience) {
    return this.achievementsDataLoader.load(experience.id);
  }
}
