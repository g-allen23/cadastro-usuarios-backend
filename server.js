import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
  const users = await prisma.users.create({
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });
  res.status(201).json(users);
});

app.get("/usuarios", async (req, res) => {
  const users = await prisma.users.findMany();
  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  const users = await prisma.users.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });
  res.status(201).json(users);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.users.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Usuário deletado com sucesso!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


