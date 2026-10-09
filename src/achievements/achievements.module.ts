import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service.js';
import { AchievementsDataLoader } from './achievements.dataloader.js';
import { ExperienceAchievementsResolver } from './experience-achievements.resolver.js';

@Module({
  providers: [
    AchievementsService,
    AchievementsDataLoader,
    ExperienceAchievementsResolver,
  ],
})
export class AchievementsModule {}
