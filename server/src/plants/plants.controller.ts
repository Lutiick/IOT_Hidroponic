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
import { PlantsService } from './plants.service';
import { CreatePlantDto, UpdatePlantDto, PlantDto } from './dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('plants')
@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Post()
  @ApiCreatedResponse({ type: PlantDto })
  create(@Body() createPlantDto: CreatePlantDto) {
    return this.plantsService.create(createPlantDto);
  }

  @Get()
  @ApiOkResponse({ type: [PlantDto] })
  findAll() {
    return this.plantsService.findAll();
  }

  @Get('selected')
  @ApiOkResponse({ type: PlantDto })
  findSelected() {
    return this.plantsService.findSelected();
  }

  @Get(':id')
  @ApiOkResponse({ type: PlantDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PlantDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlantDto: UpdatePlantDto,
  ) {
    return this.plantsService.update(id, updatePlantDto);
  }

  @Patch(':id/select')
  @ApiOkResponse({ type: PlantDto })
  select(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.select(id);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PlantDto })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.remove(id);
  }
}
