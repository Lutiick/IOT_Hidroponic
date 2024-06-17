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
import { HumiditiesService } from './humidities.service';
import { CreateHumidityDto, UpdateHumidityDto, HumidityDto } from './dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('humidities')
@Controller('humidities')
export class HumiditiesContoller {
  constructor(private readonly humiditiesService: HumiditiesService) {}

  @Post()
  @ApiCreatedResponse({ type: HumidityDto })
  create(@Body() createTemperatureDto: CreateHumidityDto) {
    return this.humiditiesService.create(createTemperatureDto);
  }

  @Get()
  @ApiOkResponse({ type: [HumidityDto] })
  findAll() {
    return this.humiditiesService.findAll();
  }

  @Get('last-hour')
  @ApiOkResponse({ type: [HumidityDto] })
  findLastHour() {
    return this.humiditiesService.findLastHour();
  }

  @Get(':id')
  @ApiOkResponse({ type: HumidityDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.humiditiesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: HumidityDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTemperatureDto: UpdateHumidityDto,
  ) {
    return this.humiditiesService.update(id, updateTemperatureDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: HumidityDto })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.humiditiesService.remove(id);
  }
}
