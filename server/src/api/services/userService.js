import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export const getAllUsers = async () => {
  const users = await prisma.findMany();
  return users;
};

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data: {
      names: data.names,
      country: data.country,
      profilePicture: data.picture || null,
      username: data.username,
      email: data.email,
      password: data.password,
    },
  });

  return user;
};

export const updateUser = async (data) => {
  const user = await prisma.update({
    where: {
      id: data.id,
    },
    data: {
      names: data.names,
      country: data.country,
      username: data.username,
      email: data.email,
      password: data.password,
    },
  });

  return user;
};

export const deleteUser = async (id) => {
  const user = await prisma.delete({
    where: {
      id,
    },
  });
};
