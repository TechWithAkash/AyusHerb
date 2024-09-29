
// // app/plants/[id]/page.js
// import Image from 'next/image'
// import { getPlantById } from '@/lib/plants'

// export default async function PlantDetailsPage({ params }) {
//   const plant = await getPlantById(params.id)

//   if (!plant) {
//     return <div>Plant not found</div>
//   }

//   return (
//     <div className="max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-green-800">{plant.name}</h1>
//       <Image src={plant.imageUrl} alt={plant.name} width={800} height={600} className="rounded-lg shadow-lg mb-6" />
//       <p className="text-xl text-gray-600 italic mb-4">{plant.scientificName}</p>
//       <div className="prose prose-green max-w-none">
//         <h2>Description</h2>
//         <p>{plant.description}</p>
//         <h2>Medicinal Uses</h2>
//         <ul>
//           {plant.uses.map((use, index) => (
//             <li key={index}>{use}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }
import Image from 'next/image';
import { getPlantById, getRelatedPlants } from '@/lib/plants'; // Assume this function fetches related plants

export default async function PlantDetailsPage({ params }) {
  const plant = await getPlantById(params.id);
  const relatedPlants = await getRelatedPlants(plant.uses); // Fetch related plants based on uses

  if (!plant) {
    return <div>Plant not found</div>;
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
      <h2 className="mt-8 mb-4 text-2xl">Related Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPlants.map((relatedPlant) => (
          <Link href={`/plants/${relatedPlant._id}`} key={relatedPlant._id}>
            <PlantCard plant={relatedPlant} />
          </Link>
        ))}
      </div>
      {/* Add User Ratings, Add to Favorites, and Share buttons below */}
      <div className="mt-6">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add to Favorites
        </button>
        <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Share
        </button>
      </div>
    </div>
  );
}
