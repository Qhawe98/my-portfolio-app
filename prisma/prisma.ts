import { PrismaClient } from './generated/prisma/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: "postgresql://portfolioadmin:portfolioadmin@localhost:5432/portfoliodb",
});

const prisma = new PrismaClient({ adapter });

export default prisma;
