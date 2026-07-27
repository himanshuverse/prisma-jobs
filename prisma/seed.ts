import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function seed() {
    await prisma.user.createMany(
        {
            data:[
      {
        name: "Emily Johnson",
        email: "emily@example.com",
        age: 29,
        isMarried: true,
        nationality: "American",
      },
      {
        name: "Sophia Brown",
        email: "sophia@example.com",
        age: 31,
        isMarried: true,
        nationality: "Canadian",
      },
      {
        name: "Liam Wilson",
        email: "liam@example.com",
        age: 27,
        isMarried: false,
        nationality: "Australian",
      },
      {
        name: "Noah Martinez",
        email: "noah@example.com",
        age: 35,
        isMarried: true,
        nationality: "Mexican",
      },
      {
        name: "Olivia Davis",
        email: "olivia@example.com",
        age: 22,
        isMarried: false,
        nationality: "British",
      },
      {
        name: "Ethan Anderson",
        email: "ethan@example.com",
        age: 30,
        isMarried: true,
        nationality: "American",
      },
      {
        name: "Ava Thomas",
        email: "ava@example.com",
        age: 26,
        isMarried: false,
        nationality: "French",
      },
      {
        name: "James Taylor",
        email: "james@example.com",
        age: 40,
        isMarried: true,
        nationality: "German",
      },
           ]
        }
    )
    
}

seed().then(()=> prisma.$disconnect())