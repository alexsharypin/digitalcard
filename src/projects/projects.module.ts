import { Module } from '@nestjs/common';
import { ProfileProjectsResolver } from './profile-projects.resolver.js';
import { ProjectsService } from './projects.service.js';

@Module({
  providers: [ProjectsService, ProfileProjectsResolver],
})
export class ProjectsModule {}
