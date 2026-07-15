import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { UsersService } from './users.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: CreateUserDto })
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Get All Users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('getUser/:id')
  @ApiOperation({ summary: 'Get User By ID' })
  findOne(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }

  @Patch('updateUser/:id')
  @ApiOperation({ summary: 'Update User' })
  @ApiBody({ type: UpdateUserDto })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.update(id, dto);
  }

  @Delete('deleteUser/:id')
  @ApiOperation({ summary: 'Deactivate User' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}