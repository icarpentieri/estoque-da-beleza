import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Put,
  ParseIntPipe,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(
    @Body()
    createProductDto: CreateProductDto
  ) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Patch(':id')
  updatedPartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateProductDto: UpdateProductDto
  ) {
    return this.productsService.updatePartial(id, UpdateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
