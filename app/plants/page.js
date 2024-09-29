
// // app/plants/page.js
// import Link from 'next/link'
// import PlantCard from '@/component/PlantCard'
// import { getPlants } from '@/lib/plants'

// export default async function PlantsPage() {
//   const plants = await getPlants()

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6 text-green-800">AYUSH Herbal Plants</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {plants.map((plant) => (
//           <PlantCard key={plant._id} plant={plant} />
//         ))}
//       </div>
//     </div>
//   )
// }
// app/plants/page.js
"use client"
import Link from 'next/link';
import PlantCard from '@/component/PlantCard';

export default function PlantsPage() {
  // Hardcoded list of herbal plants
  const plants = [
    {
      _id: "1",
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      description: "Ashwagandha is an adaptogen that helps the body manage stress, reduce anxiety, and improve overall well-being.",
      uses: [
        "Reduces stress and anxiety",
        "Improves sleep quality",
        "Boosts energy levels",
        "Enhances cognitive function"
      ],
      imageUrl: "https://example.com/ashwagandha.jpg"
    },
    {
      _id: "2",
      name: "Tulsi",
      scientificName: "Ocimum sanctum",
      description: "Tulsi, also known as holy basil, is revered for its medicinal properties and is often used in Ayurvedic medicine.",
      uses: [
        "Enhances immunity",
        "Balances blood sugar levels",
        "Promotes respiratory health",
        "Reduces inflammation"
      ],
      imageUrl: "https://example.com/tulsi.jpg"
    },
    {
      _id: "3",
      name: "Neem",
      scientificName: "Azadirachta indica",
      description: "Neem is known for its antimicrobial properties and is often used in skin treatments.",
      uses: [
        "Treats skin disorders",
        "Improves dental health",
        "Boosts immune system",
        "Acts as a natural insect repellent"
      ],
      imageUrl: "https://www.pexels.com/photo/close-up-of-green-leaves-of-a-plant-12643734/"
    },
    {
      _id: "4",
      name: "Ginger",
      scientificName: "Zingiber officinale",
      description: "Ginger is widely used for its anti-inflammatory and digestive health benefits.",
      uses: [
        "Alleviates nausea",
        "Reduces muscle pain",
        "Lowers blood sugar levels",
        "Improves digestion"
      ],
      imageUrl: "https://example.com/ginger.jpg"
    },
    {
      _id: "5",
      name: "Turmeric",
      scientificName: "Curcuma longa",
      description: "Turmeric contains curcumin, which has powerful anti-inflammatory effects and is a strong antioxidant.",
      uses: [
        "Reduces inflammation",
        "Enhances skin health",
        "Supports joint health",
        "Improves brain function"
      ],
      imageUrl: "https://example.com/turmeric.jpg"
    },
    {
      _id: "6",
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis miller",
      description: "Aloe Vera is well-known for its soothing properties and is commonly used in skin care.",
      uses: [
        "Soothes sunburn",
        "Moisturizes skin",
        "Supports digestive health",
        "Promotes wound healing"
      ],
      imageUrl: "https://example.com/aloe-vera.jpg"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-green-800 text-center">AYUSH Herbal Plants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <Link href={`/plants/${plant._id}`} key={plant._id}>
            <PlantCard plant={plant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
