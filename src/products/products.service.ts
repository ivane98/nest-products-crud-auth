import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductDto) {
    return this.prisma.product.create({ data: dto });
  }

  // findAll(): Product[] {
  //   return this.products;
  // }

  // findOne(name: string): Product {
  //   const match = this.products.find((p) => p.name === name);
  //   if (match) {
  //     return match;
  //   }
  //   return this.products[0];
  // }

  // update(id: number, dto: UpdateProductDto) {
  //   const match = this.products.find((p) => p.id === id);
  // }
}
