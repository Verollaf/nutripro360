require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('NutriPro360 is running');
});

// ✅ Users Route
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// ✅ Avvio del Server
app.listen(PORT, () => {
  console.log(`✅ NutriPro360 running on http://localhost:${PORT}`);
});
