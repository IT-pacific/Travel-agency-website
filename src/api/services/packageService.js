import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create package
export const createPackage = async (data) => {
  const item = prisma.package.create({
    data: {
      title: data.title,
      description: data.description,
      departureLocation: data.departureLocation,
      departureTime: data.departureTime,
      price: data.price,
      duration: data.duration,
    },
  });

  return item;
};

// Get single package
export const getPackage = async (id) => {
  const item = await prisma.package.findFirst({
    where: {
      id: id,
    },
  });
  return item;
};

// Get Multiple packages with pagination
export const getPackages = async (take, skip) => {
  const item = await prisma.package.findMany({
    take,
    skip
  });
  return item;
};

// Update single package
export const updatePackage = async (data) => {
  const item = prisma.package.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      description: data.description,
      departureLocation: data.departureLocation,
      departureTime: data.departureTime,
      price: data.price,
      duration: data.duration,
    },
  });

  return item;
};

// Delete single package
export const deletePackage = async (id) => {
  const item = prisma.package.delete({
    where: {
      id: id,
    },
  });

  return item;
};
