import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Skill } from './skill.model.js';
import { SkillsService } from './skills.service.js';
import { Profile } from '../profile/profile.model.js';

@Resolver(() => Profile)
export class ProfileSkillsResolver {
  constructor(private readonly skillsService: SkillsService) {}

  @ResolveField(() => [Skill])
  async skills(@Parent() profile: Profile) {
    return this.skillsService.findByProfileId(profile.id);
  }
}
