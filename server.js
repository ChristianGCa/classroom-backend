import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express(); // Iniciando o express
app.use(express.json()); // Dizendo que o express vai usar o json
app.use(cors());

// Rota de criação
app.post("/tarefas", async (req, res) => {
  await prisma.tarefas.create({
    data: {
      tarefa: req.body.tarefa,
      prioridade: req.body.prioridade,
    },
  });

  res.status(201).json(req.body);
});

// Rota de listagem
app.get("/tarefas", async (req, res) => {
  let tarefas = [];

  if (req.query) {
    tarefas = await prisma.tarefas.findMany({
      where: {
        id: req.query.id,
      },
    });
  } else {
    tarefas = await prisma.tarefas.findMany();
  }
  res.status(200).json(tarefas);
});

// Rota de edição
app.put("/tarefas/:id", async (req, res) => {
  await prisma.tarefas.update({
    where: {
      id: req.params.id,
    },
    data: {
      tarefa: req.body.tarefa,
      prioridade: req.body.prioridade,
    },
  });
  res.status(200).json(req.body);
});

// Rota de delecão
app.delete("/tarefas/:id", async (req, res) => {
  await prisma.tarefas.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Tarefa deletada com sucesso!" });
});

app.listen(3000);
