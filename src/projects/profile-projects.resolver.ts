import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Project } from './project.model.js';
import { ProjectsService } from './projects.service.js';
import { Profile } from '../profile/profile.model.js';

@Resolver(() => Profile)
export class ProfileProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @ResolveField(() => [Project])
  async projects(@Parent() profile: Profile) {
    return this.projectsService.findByProfileId(profile.id);
  }
}
