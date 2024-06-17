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
import { WaterLevelsService } from './water-levels.service';
import { CreateWaterLevelDto, UpdateWaterLevelDto, WaterLevelDto } from './dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('water-levels')
@Controller('water-levels')
export class WaterLevelsContoller {
  constructor(private readonly waterLevelsService: WaterLevelsService) {}

  @Post()
  @ApiCreatedResponse({ type: WaterLevelDto })
  create(@Body() createTemperatureDto: CreateWaterLevelDto) {
    return this.waterLevelsService.create(createTemperatureDto);
  }

  @Get()
  @ApiOkResponse({ type: [WaterLevelDto] })
  findAll() {
    return this.waterLevelsService.findAll();
  }

  @Get('last-hour')
  @ApiOkResponse({ type: [WaterLevelDto] })
  findLastHour() {
    return this.waterLevelsService.findLastHour();
  }

  @Get(':id')
  @ApiOkResponse({ type: WaterLevelDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.waterLevelsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: WaterLevelDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTemperatureDto: UpdateWaterLevelDto,
  ) {
    return this.waterLevelsService.update(id, updateTemperatureDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: WaterLevelDto })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.waterLevelsService.remove(id);
  }
}
