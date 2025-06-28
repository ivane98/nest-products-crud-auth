import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `his path returns product with and id of ${id}`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,

    @Body() updateProductDto: UpdateProductDto,
  ): string {
    return `this path updates product with an id of ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `this path removes a product with an id of ${id}`;
  }
}
