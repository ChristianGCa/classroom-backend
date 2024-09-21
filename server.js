import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express() // Iniciando o express
app.use(express.json()) // Dizendo que o express vai usar o json

// Rota de criação
app.post('/turmas', async (req, res) => {
    await prisma.turmas.create({
        data: {
            title: req.body.title,
            subtitle: req.body.subtitle,
            teacher: req.body.teacher,
            pfp: req.body.pfp,
            bg: req.body.bg
        }
    })

    res.status(201).json(req.body)
})

// Rota de listagem
app.get('/turmas', async (req, res) => {

    let turmas = []

    if (req.query) {
        turmas = await prisma.turmas.findMany({
            where: {
                title: req.body.title,
                subtitle: req.body.subtitle,
                teacher: req.body.teacher
            }
        })

    } else {
        turmas = await prisma.turmas.findMany()
    }
    res.status(200).json(turmas)
})

// Rota de edição
app.put('/turmas/:id', async (req, res) => {
    await prisma.turmas.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
})

// Rota de delecão
app.delete('/turmas/:id', async (req, res) => {
    await prisma.turmas.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: 'Usuario deletado com sucesso!' })
})

app.listen(3000)