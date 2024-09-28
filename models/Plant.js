
// models/Plant.js
import mongoose from 'mongoose'

const PlantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scientificName: { type: String, required: true },
  description: { type: String, required: true },
  uses: [{ type: String }],
  imageUrl: { type: String },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Plant || mongoose.model('Plant', PlantSchema)
