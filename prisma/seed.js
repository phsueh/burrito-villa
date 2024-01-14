const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const createBurritos = await prisma.burrito.createMany({
        data: [
            {name: 'Chicken Burrito',size: 'small', price: 8},
            {name: 'Chicken Burrito',size: 'medium', price: 9},
            {name: 'Chicken Burrito',size: 'large', price: 10},
            {name: 'Beef Burrito',size: 'small', price: 8},
            {name: 'Beef Burrito',size: 'medium', price: 9},
            {name: 'Beef Burrito',size: 'large', price: 10},
            {name: 'Carnitas Burrito',size: 'small', price: 8},
            {name: 'Carnitas Burrito',size: 'medium', price: 9},
            {name: 'Carnitas Burrito',size: 'large', price: 10},
        ]
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })