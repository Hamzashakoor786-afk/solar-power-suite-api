import {
  PrismaClient,
  UserRole,
  PermissionType,
} from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const permissions = [
  PermissionType.USER_CREATE,
  PermissionType.USER_VIEW,
  PermissionType.USER_UPDATE,
  PermissionType.USER_DELETE,

  PermissionType.ROLE_CREATE,
  PermissionType.ROLE_VIEW,
  PermissionType.ROLE_UPDATE,
  PermissionType.ROLE_DELETE,

  PermissionType.CUSTOMER_CREATE,
  PermissionType.CUSTOMER_VIEW,
  PermissionType.CUSTOMER_UPDATE,
  PermissionType.CUSTOMER_DELETE,

  PermissionType.PRODUCT_CREATE,
  PermissionType.PRODUCT_VIEW,
  PermissionType.PRODUCT_UPDATE,
  PermissionType.PRODUCT_DELETE,

  PermissionType.QUOTATION_CREATE,
  PermissionType.QUOTATION_VIEW,
  PermissionType.QUOTATION_UPDATE,
  PermissionType.QUOTATION_DELETE,

  PermissionType.DASHBOARD_VIEW,
];

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

  for (const permission of permissions) {
  await prisma.permission.upsert({
    where: {
      name: permission,
    },
    update: {},
    create: {
      name: permission,
      description: permission.replaceAll('_', ' '),
    },
  });
}

const allPermissions = await prisma.permission.findMany();

for (const permission of allPermissions) {
  await prisma.rolePermission.upsert({
    where: {
      roleId_permissionId: {
        roleId: adminRole.id,
        permissionId: permission.id,
      },
    },
    update: {},
    create: {
      roleId: adminRole.id,
      permissionId: permission.id,
    },
  });
}

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