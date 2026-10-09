import { Injectable } from '@nestjs/common';
import { Experience } from './experience.model.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ExperiencesService {
  constructor(private readonly prisma: PrismaService) {}

  async findByProfileId(profileId: number): Promise<Experience[]> {
    return await this.prisma.experience.findMany({
      where: { profileId },
      orderBy: [{ startYear: 'desc' }, { startMonth: 'desc' }],
    });
  }
}
