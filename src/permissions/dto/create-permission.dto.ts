import { ApiProperty } from '@nestjs/swagger';
import { PermissionType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({
    enum: PermissionType,
    example: PermissionType.USER_CREATE,
  })
  @IsEnum(PermissionType)
  name: PermissionType;

  @ApiProperty({
    example: 'Create Users',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}