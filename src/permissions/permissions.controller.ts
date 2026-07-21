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
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { PermissionsService } from './permissions.service';

import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@ApiTags('Permissions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(
    private readonly permissionsService: PermissionsService,
  ) {}

  @Post('createPermission')
  @ApiOperation({ summary: 'Create Permission' })
  @ApiBody({ type: CreatePermissionDto })
  create(@Body() dto: CreatePermissionDto) {
    return this.permissionsService.create(dto);
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Get All Permissions' })
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get('getPermission/:id')
  @ApiOperation({ summary: 'Get Permission By ID' })
  @ApiParam({
    name: 'id',
    example: '7bb0dfaf-b9b7-48ec-b1e7-2cb2f11cf665',
  })
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(id);
  }

  @Patch('updatePermission/:id')
  @ApiOperation({ summary: 'Update Permission' })
  @ApiParam({
    name: 'id',
    example: '7bb0dfaf-b9b7-48ec-b1e7-2cb2f11cf665',
  })
  @ApiBody({
    type: UpdatePermissionDto,
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(id, dto);
  }

  @Delete('deletePermission/:id')
  @ApiOperation({ summary: 'Delete Permission' })
  @ApiParam({
    name: 'id',
    example: '7bb0dfaf-b9b7-48ec-b1e7-2cb2f11cf665',
  })
  remove(@Param('id') id: string) {
    return this.permissionsService.remove(id);
  }
}