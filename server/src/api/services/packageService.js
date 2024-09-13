import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create package
export const createPackage = async (
  title,
  description,
  departure,
  time,
  duration,
  thumbnail,
  itineraries
) => {
  try {
    const item = await prisma.package.create({
      data: {
        title,
        description,
        departureLocation: departure,
        departureTime: time,
        thumbnail,
        duration,
        itineraries: {
          create: itineraries.map((itinerary) => ({
            dayNumber: parseInt(itinerary.day),
            title: itinerary.title,
            description: itinerary.description,
          })),
        },
      },
      include: {
        itineraries: true, // Include related itineraries in the result
      },
    });

    return item;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Get single package
export const getPackage = async (id) => {
  const item = await prisma.package.findFirst({
    where: {
      id: id,
    },
    include: {
      itineraries: true,
    },
  });
  return item;
};

// Get Multiple packages with pagination
export const getPackages = async (take, skip) => {
  const item = await prisma.package.findMany({
    take,
    skip,
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
