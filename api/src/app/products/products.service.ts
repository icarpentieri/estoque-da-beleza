import { Injectable, NotFoundException } from '@nestjs/common'; //
import { PrismaClient } from 'generated/prisma';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { NotFoundError } from 'rxjs';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async findAll() {
    return prisma.product.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    return product;
  }

  async create(data: CreateProductDto) {
    return prisma.product.create({ data });
  }

  async update(id: number, data: UpdateProductDto) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  async updatePartial(id: number, data: UpdateProductDto) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    try {
      await prisma.product.delete({
        where: { id },
      });

      return { message: `Product with id ${id} deleted successfully.` };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Product with id ${id} not found.`);
      }
      throw error;
    }
  }
}
