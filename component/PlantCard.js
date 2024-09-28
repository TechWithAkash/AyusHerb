
// component/PlantCard.js
import Image from 'next/image'
import Link from 'next/link'

export default function PlantCard({ plant }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={plant.imageUrl} alt={plant.name} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-green-800 mb-2">{plant.name}</h2>
        <p className="text-sm text-gray-600 italic mb-2">{plant.scientificName}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{plant.description}</p>
        <Link href={`/plants/${plant._id}`} className="text-green-600 hover:text-green-800 font-medium">
          Learn More
        </Link>
      </div>
    </div>
  )
}