import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ProfileDto {
  @ApiProperty({
    example: '8b5d6bfa-732e-4558-83f9-12155df382e8',
  })
  @IsNotEmpty()
  id: string;
}