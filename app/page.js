

/// app/page.js
// app/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MapPin, Camera, Leaf, Users, Star } from "lucide-react"; // Icons
// import AYUSHHealthAdvisor from "@/component/AYUSHHealthAdvisor";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
                  <span className="block xl:inline">Discover the power of</span>{" "}
                  <span className="block text-green-600 xl:inline">AYUSH Herbs</span>
                </h1>
                <p className="mt-3 text-lg text-gray-600 font-semibold sm:mt-5 sm:text-xl md:mt-5 lg:mx-0">
                  Identify and explore Ayurvedic, Yoga, Unani, Siddha, and Homeopathy herbs with our AI-powered platform.
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Link
                    href="/identify"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Identify a Herb
                  </Link>
                  <Link
                    href="/plants"
                    className="mt-3 sm:mt-0 sm:ml-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Herbs
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full ">
          <Image
            src="/images/hero-image.jpg"
            alt="Various herbal plants"
            className="h-72 w-full object-cover sm:h-96 md:h-full lg:h-full hidden md:block"
            width={1000}
            height={1000}
          />
        </div>
      </div>
{/* 
      <section className="py-12 bg-gradient-to-b from-green-100 to-white">
  <AYUSHHealthAdvisor />
</section> */}

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Explore the world of AYUSH herbs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform offers a variety of tools to help you identify and learn about AYUSH herbal plants.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "AI-Powered Identification",
                description: "Upload an image or use your camera to instantly identify AYUSH herbs.",
                icon: <Camera className="h-6 w-6 text-white" />,
              },
              {
                name: "Comprehensive Database",
                description: "Access detailed information about a wide variety of AYUSH herbal plants.",
                icon: <Leaf className="h-6 w-6 text-white" />,
              },
              {
                name: "Community Forum",
                description: "Connect with other herb enthusiasts, share knowledge, and ask questions.",
                icon: <Users className="h-6 w-6 text-white" />,
              },
              {
                name: "Personal Herb Collection",
                description: "Save and organize your favorite herbs for quick reference.",
                icon: <Star className="h-6 w-6 text-white" />,
              },
            ].map((feature) => (
              <div key={feature.name} className="relative p-6 bg-gray-50 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500">
                  {feature.icon}
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Camera, Upload, Loader, Leaf, Droplet } from 'lucide-react';

// export default function Home() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [identificationResult, setIdentificationResult] = useState(null);
//   const [waterReminder, setWaterReminder] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleCameraCapture = () => {
//     console.log('Camera capture not implemented in this demo');
//   };

//   const identifyPlant = async () => {
//     if (!image) return;

//     setIsLoading(true);
//     setTimeout(() => {
//       setIdentificationResult({
//         name: 'Tulsi (Holy Basil)',
//         scientificName: 'Ocimum sanctum',
//         uses: [
//           'Boosts immunity',
//           'Reduces stress and anxiety',
//           'Lowers blood sugar levels',
//         ],
//       });
//       setIsLoading(false);
//     }, 2000);
//   };

//   const setPlantWaterReminder = () => {
//     setWaterReminder(true);
//     alert('Water reminder set for your identified plant!');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-blue-200">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative z-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
//             <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//               <div className="sm:text-center lg:text-left">
//                 <h1 className="text-4xl tracking-tight font-extrabold text-green-900 sm:text-5xl md:text-6xl">
//                   <span className="block xl:inline">Discover the power of</span>{' '}
//                   <span className="block text-green-600 xl:inline">AYUSH herbs</span>
//                 </h1>
//                 <p className="mt-3 text-base text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
//                   Identify and learn about Ayurvedic, Yoga & Naturopathy, Unani, Siddha, and Homeopathy herbs using our AI-powered platform.
//                 </p>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>

//       {/* Plant Identification Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-lg rounded-lg mt-12">
//         <h2 className="text-3xl font-extrabold text-green-800 mb-8 text-center">Identify Your Plant</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-green-50 hover:bg-green-100 transition duration-300">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                 <Upload className="w-10 h-10 mb-3 text-green-500" />
//                 <p className="mb-2 text-sm text-green-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                 <p className="text-xs text-green-500">PNG, JPG or GIF (MAX. 800x400px)</p>
//               </div>
//               <input id="file-upload" type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
//             </label>
//           </div>
//           <div className="flex justify-center items-center">
//             <button onClick={handleCameraCapture} className="flex items-center justify-center w-64 h-64 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
//               <Camera className="w-16 h-16" />
//             </button>
//           </div>
//         </div>

//         {preview && (
//           <div className="mt-8 text-center">
//             <div className="relative w-64 h-64 mx-auto rounded-lg overflow-hidden shadow-xl">
//               <Image src={preview} alt="Preview" layout="fill" objectFit="cover" />
//             </div>
//             <button 
//               onClick={identifyPlant}
//               disabled={isLoading}
//               className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 inline-flex items-center"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
//                   Identifying...
//                 </>
//               ) : (
//                 <>
//                   <Leaf className="mr-2 h-5 w-5" />
//                   Identify Plant
//                 </>
//               )}
//             </button>
//           </div>
//         )}

//         {identificationResult && (
//           <div className="mt-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6">
//             <h3 className="text-2xl font-bold mb-2 text-green-800">{identificationResult.name}</h3>
//             <p className="text-xl italic mb-4 text-green-600">{identificationResult.scientificName}</p>
//             <h4 className="text-xl font-semibold mb-2 text-green-700">Medicinal Uses:</h4>
//             <ul className="list-disc list-inside space-y-2 text-green-900">
//               {identificationResult.uses.map((use, index) => (
//                 <li key={index}>{use}</li>
//               ))}
//             </ul>
//             <button
//               onClick={setPlantWaterReminder}
//               className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center"
//             >
//               <Droplet className="mr-2 h-5 w-5" />
//               Set Water Reminder
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Feature Section */}
//       <div className="py-12 bg-gradient-to-br from-green-50 to-green-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               Discover the world of AYUSH herbs
//             </p>
//           </div>

//           <div className="mt-10">
//             <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//               {[
//                 {
//                   name: 'AI-Powered Identification',
//                   description: 'Upload an image or use your camera to instantly identify AYUSH herbs.'
//                 },
//                 {
//                   name: 'Comprehensive Database',
//                   description: 'Access detailed information about a wide variety of AYUSH herbal plants.'
//                 },
//                 {
//                   name: 'Community Forum',
//                   description: 'Connect with other herb enthusiasts, share knowledge, and ask questions.'
//                 },
//                 {
//                   name: 'Plant Care Reminders',
//                   description: 'Set personalized reminders for watering and caring for your identified plants.'
//                 }
//               ].map((feature) => (
//                 <div key={feature.name} className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
//                       <Leaf className="h-6 w-6" />
//                     </div>
//                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
