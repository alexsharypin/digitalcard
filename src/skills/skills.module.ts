import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service.js';
import { ProfileSkillsResolver } from './profile-skills.resolver.js';

@Module({
  providers: [SkillsService, ProfileSkillsResolver],
})
export class SkillsModule {}
