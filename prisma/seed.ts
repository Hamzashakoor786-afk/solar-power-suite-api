import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminRole = await prisma.role.upsert({
    where: { name: UserRole.ADMIN },
    update: {},
    create: {
      name: UserRole.ADMIN,
      description: 'System Administrator',
    },
  });

  await prisma.role.upsert({
    where: { name: UserRole.SALES },
    update: {},
    create: {
      name: UserRole.SALES,
      description: 'Sales Executive',
    },
  });

  await prisma.role.upsert({
    where: { name: UserRole.ENGINEER },
    update: {},
    create: {
      name: UserRole.ENGINEER,
      description: 'Solar Engineer',
    },
  });

  const password = await bcrypt.hash('Admin@123', 10);

  await prisma.user.upsert({
    where: {
      email: 'admin@solar.com',
    },
    update: {},
    create: {
      fullName: 'System Administrator',
      email: 'admin@solar.com',
      phone: '03001234567',
      password,
      roleId: adminRole.id,
    },
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });