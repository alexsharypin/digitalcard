import { Module } from '@nestjs/common';
import { ProfileExperiencesResolver } from './profile-experiences.resolver.js';
import { ExperiencesService } from './experiences.service.js';

@Module({
  providers: [ExperiencesService, ProfileExperiencesResolver],
})
export class ExperiencesModule {}
