
// app/plants/page.js
import Link from 'next/link'
import PlantCard from '@/component/PlantCard'
import { getPlants } from '@/lib/plants'

export default async function PlantsPage() {
  const plants = await getPlants()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-800">AYUSH Herbal Plants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <PlantCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  )
}
