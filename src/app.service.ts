import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getDBTime() {
    const result = await this.prisma.$queryRaw`SELECT NOW()`;

    return {
      message: 'DB Time fetched successfully',
      database: result,
    };
  }
}
