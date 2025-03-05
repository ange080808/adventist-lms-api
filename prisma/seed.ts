import { PrismaClient } from '@prisma/client';
import { passwordEncryption } from '../src/lib/password-encryption';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await passwordEncryption('password');

  const user = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      role: 'Admin',
      firstName: 'Admin',
      lastName: 'Admin',
      middleName: '',
      age: 23,
      gender: 'Male',
      address: 'Pangasinan',
    },
  });

  const admin = await prisma.admin.upsert({
    where: { id: user.id },
    update: {},
    create: {
      id: user.id,
      email: 'admin@email.com',
      employeeId: '20-1234',
    },
  });

  const lesson1 = await prisma.lesson.createMany({
    data: [
      {
        title: 'In the Beginning God Created the World',
        description: 'lorem ipsum',
        moduleNo: 1,
        content: 'Lesson1',
      },
      {
        title: 'First Day of Creation',
        description: 'lorem ipsum',
        moduleNo: 1,
        content: 'Lesson2',
      },
      {
        title: 'Third Day of Creation',
        description: 'lorem ipsum',
        moduleNo: 1,
        content: 'Lesson3',
      },
    ],
  });

  const act = await prisma.activity.createMany({
    data: [
      {
        title: 'Count The Fruit',
        description: 'lorem ipsum',
        content: 'count-the-fruit',
        totalPoints: 10,
      },
      {
        title: 'Find Missing Letter',
        description: 'lorem ipsum',
        content: 'find-missing-letter',
        totalPoints: 10,
      },
      {
        title: 'Name The Color',
        description: 'lorem ipsum',
        content: 'name-the-color',
        totalPoints: 10,
      },
    ],
  });

  console.log('DATA IMPORTED SUCCESSFULLY');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
