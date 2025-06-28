import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(name: string): Product {
    const match = this.products.find((p) => p.name === name);
    if (match) {
      return match;
    }
    return this.products[0];
  }

  update(id: string, dto: UpdateProductDto) {
    const match = this.products.find((p) => p.id === id);
  }
}
