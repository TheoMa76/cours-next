"use server"

import { Prisma } from "@prisma/client"
import { PrismaClient } from "@prisma/client/extension"

const prisma = new PrismaClient()

async function createPost(values: ) {
  return prisma.post.create({
    data: values,
  })
  
}