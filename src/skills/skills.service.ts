import { Injectable } from '@nestjs/common';
import { Skill } from './skill.model.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) {}

  async findByProfileId(profileId: number): Promise<Skill[]> {
    return await this.prisma.skill.findMany({
      where: { profile: { some: { profileId } } },
      orderBy: { id: 'asc' },
    });
  }
}
