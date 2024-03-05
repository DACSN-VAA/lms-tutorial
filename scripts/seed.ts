//trang nay code cac danh muc category

const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        {
          name: "Computer Science",
        },
        {
          name: "Music",
        },
        {
          name: "Fitness",
        },
        {
          name: "Photography",
        },
        {
          name: "Accouting",
        },
        {
          name: "Engineer",
        },
        {
          name: "C++",
        },
        {
          name: "C#",
        },
        {
          name: "Java",
        },
      ],
    });
    console.log("Sucsess");
  } catch (error) {
    console.log("Error sending the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
