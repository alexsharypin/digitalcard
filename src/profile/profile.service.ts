import { Injectable } from '@nestjs/common';
import { Profile } from './profile.model.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async get(): Promise<Profile> {
    return await this.prisma.profile.findFirstOrThrow();
  }
}
