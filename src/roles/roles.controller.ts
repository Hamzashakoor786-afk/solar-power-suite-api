import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { RolesService } from './roles.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags('Roles')
@ApiBearerAuth()
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('createRole')
  @ApiOperation({
    summary: 'Create Role',
  })
  @ApiBody({
    type: CreateRoleDto,
  })
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.create(dto);
  }

  @Get('getAll')
  @ApiOperation({
    summary: 'Get All Roles',
  })
  findAll() {
    return this.rolesService.findAll();
  }

  @Get('getRole/:id')
  @ApiOperation({
    summary: 'Get Role By ID',
  })
  @ApiParam({
    name: 'id',
    example: 'c6db8d6c-22df-4d7d-a89c-3d01a51e44fa',
  })
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Patch('updateRole/:id')
  @ApiOperation({
    summary: 'Update Role',
  })
  @ApiParam({
    name: 'id',
    example: 'c6db8d6c-22df-4d7d-a89c-3d01a51e44fa',
  })
  @ApiBody({
    type: UpdateRoleDto,
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateRoleDto,
  ) {
    return this.rolesService.update(id, dto);
  }

  @Delete('deleteRole/:id')
  @ApiOperation({
    summary: 'Delete Role',
  })
  @ApiParam({
    name: 'id',
    example: 'c6db8d6c-22df-4d7d-a89c-3d01a51e44fa',
  })
  remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}