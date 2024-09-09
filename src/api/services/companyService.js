import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get company info
export const getCompanyProfile = async () => {
  const profile = await prisma.companyInfo.findFirst();
  return profile;
};

// Create company profile
export const createCompanyProfile = async (data) => {
  const profile = await prisma.companyInfo.create({
    data: {
      name: data.name,
      description: data.description,
      vision: data.vision,
      mission: data.mission,
      history: data.history,
    },
  });

  return profile;
};

// Update company profile
export const updateCompanyProfile = async (data) => {
  const profile = await prisma.companyInfo.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      description: data.description,
      vision: data.vision,
      mission: data.mission,
      history: data.history,
    },
  });

  return profile;
};

// Delete company profile
export const deleteCompanyProfile = async (id) => {
  const profile = prisma.companyInfo.delete({
    where: {
      id: id,
    },
  });

  return profile;
};
