import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function seed() {
    await prisma.user.createMany(
        {
            data:[
                {name:"alex",email:"alex@example.com"},
                {name:"slice",email:"slice@example.com"}
           ]
        }
    )
    
}

seed().then(()=> prisma.$disconnect())