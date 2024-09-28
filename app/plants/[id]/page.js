
// app/plants/[id]/page.js
import Image from 'next/image'
import { getPlantById } from '@/lib/plants'

export default async function PlantDetailsPage({ params }) {
  const plant = await getPlantById(params.id)

  if (!plant) {
    return <div>Plant not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-800">{plant.name}</h1>
      <Image src={plant.imageUrl} alt={plant.name} width={800} height={600} className="rounded-lg shadow-lg mb-6" />
      <p className="text-xl text-gray-600 italic mb-4">{plant.scientificName}</p>
      <div className="prose prose-green max-w-none">
        <h2>Description</h2>
        <p>{plant.description}</p>
        <h2>Medicinal Uses</h2>
        <ul>
          {plant.uses.map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}