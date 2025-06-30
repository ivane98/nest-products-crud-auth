import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    return await this.prisma.product.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, dto: CreateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: { ...dto },
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({ where: { id } });
  }
}
