import { PrismaClient } from '@prisma/client'
import express from 'express'
import { convertHourStringToMinutes } from './utils/convert-hours-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hours-string'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
  log: ['query']
})

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return res.status(200).json(games)
})

app.get('/games/:id/ads', async (req, res) => {
  const { id } = req.params

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true
    },
    where: {
      gameId: id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.status(200).json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }))
})

app.post('/games/:id/ads', async (req, res) => {
  const { id } = req.params
  const { body } = req

  const ad = await prisma.ad.create({
    data: {
      gameId: id,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  return res.status(201).json(ad)
})

app.get('/ads/:id/discord', async (req, res) => {
  const { id } = req.params

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id
    }
  })

  return res.status(200).json({ discord: ad.discord })
})

app.listen(3333, () => {
  console.log('Server is running')
})