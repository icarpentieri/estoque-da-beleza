import { Injectable } from '@nestjs/common'; //
import { PrismaClient } from 'generated/prisma';
import { CreateProductDto } from './dto/create-product.dto';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async findAll() {
    return prisma.product.findMany();
  }

  async create(data: CreateProductDto) {
    return prisma.product.create({ data });
  }
}
