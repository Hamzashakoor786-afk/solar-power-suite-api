import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    enum: UserRole,
    example: UserRole.SALES,
    description: 'Role Name',
  })
  @IsEnum(UserRole)
  name: UserRole;

  @ApiProperty({
    example: 'Sales Executive',
    description: 'Role Description',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}