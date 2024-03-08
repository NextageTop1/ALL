import { Prisma, PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify()

const prisma = PrismaClient()

app.get('/user',async () => {
    const user = await prisma.user.findMany()

    return{user}
})

app.post('/user', (request)=>{
    const { }
})