
// lib/plants.js
import Plant from '@/models/Plant'
import { connectDB } from './mongodb'
export async function getPlants() {
  await connectDB()
  const plants = await Plant.find({}).sort({ createdAt: -1 }).limit(20)
  return JSON.parse(JSON.stringify(plants))
}

export async function getPlantById(id) {
  await connectDB()
  const plant = await Plant.findById(id)
  return plant ? JSON.parse(JSON.stringify(plant)) : null
}

export async function addPlant(plantData) {
  await connectDB()
  const plant = new Plant(plantData)
  await plant.save()
  return JSON.parse(JSON.stringify(plant))
}