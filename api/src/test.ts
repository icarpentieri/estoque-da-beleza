import { PrismaClient } from '../../generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.create({
    data: {
      name: 'Produto Teste',
      price: 99.9,
      discountType: null,
      discountValue: null,
    },
  });

  console.log('Produto criado:', product);

  const products = await prisma.product.findMany();
  console.log('listar todos os produtos', products);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
