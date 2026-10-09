import { Injectable } from '@nestjs/common';
import { Project } from './project.model.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findByProfileId(profileId: number): Promise<Project[]> {
    return await this.prisma.project.findMany({
      where: { profileId },
      orderBy: { id: 'asc' },
    });
  }
}
