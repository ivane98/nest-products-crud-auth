import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // @Get()
  // async findAll(): Promise<Product[]> {
  //   return this.productsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   console.log(id);
  //   return `his path returns product with and id of ${id}`;
  // }

  // @Put(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,

  //   @Body() updateProductDto: UpdateProductDto,
  // ) {
  //   return `this path updates product with an id of ${id}`;
  // }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return `this path removes a product with an id of ${id}`;
  // }
}
