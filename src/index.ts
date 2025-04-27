import express from 'express'
import prisma from './prisma'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('URL Shortener API')
})

app.get('/test-db', async (req, res) => {
  try {
    await prisma.$connect()
    res.json({ message: 'Database connection successful' })
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})