import { Injectable } from '@nestjs/common';
import { Achievement } from './achievement.model.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AchievementsService {
  constructor(private readonly prisma: PrismaService) {}

  async findByExperienceIds(experienceIds: number[]): Promise<Achievement[]> {
    return await this.prisma.achievement.findMany({
      where: { experienceId: { in: experienceIds } },
      orderBy: { id: 'asc' },
    });
  }
}
