import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TemperaturesService } from './temperatures.service';
import {
  CreateTemperatureDto,
  UpdateTemperatureDto,
  TemperatureDto,
} from './dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('temperatures')
@Controller('temperatures')
export class TemperaturesController {
  constructor(private readonly temperaturesService: TemperaturesService) {}

  @Post()
  @ApiCreatedResponse({ type: TemperatureDto })
  create(@Body() createTemperatureDto: CreateTemperatureDto) {
    return this.temperaturesService.create(createTemperatureDto);
  }

  @Get()
  @ApiOkResponse({ type: [TemperatureDto] })
  findAll() {
    return this.temperaturesService.findAll();
  }

  @Get('last-hour')
  @ApiOkResponse({ type: [TemperatureDto] })
  findLastHour() {
    return this.temperaturesService.findLastHour();
  }

  @Get(':id')
  @ApiOkResponse({ type: TemperatureDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.temperaturesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TemperatureDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTemperatureDto: UpdateTemperatureDto,
  ) {
    return this.temperaturesService.update(id, updateTemperatureDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TemperatureDto })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.temperaturesService.remove(id);
  }
}
