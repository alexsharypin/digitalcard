import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { Experience } from './experience.model.js';
import { ExperiencesService } from './experiences.service.js';
import { Profile } from '../profile/profile.model.js';

@Resolver(() => Profile)
export class ProfileExperiencesResolver {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @ResolveField(() => [Experience])
  async experience(@Parent() profile: Profile) {
    return this.experiencesService.findByProfileId(profile.id);
  }
}
