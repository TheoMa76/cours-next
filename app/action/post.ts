"use server"

import { Prisma } from "@prisma/client"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { createPostSchema } from "../validate/createPost"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

export async function createPost(values: z.infer<typeof createPostSchema>) {
  await prisma.post.create({
    data: values,
  })
  revalidatePath("/contact/form")
  return
}