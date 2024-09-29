

/// app/page.js
// app/page.js
// "use client";
"use client";
import React, { useState, Fragment, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { MapPin, Camera, Leaf, Users, Star, Upload, Loader, X,UserCheck } from "lucide-react";
import { Dialog, Transition } from '@headlessui/react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingText = [
    "Ayurvedic herbs",
    "Yoga practices",
    "Unani medicines",
    "Siddha remedies",
    "Homeopathic solutions"
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingText.length]); // Add this line
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCameraCapture = () => {
    console.log('Camera capture not implemented in this demo');
  };

  const identifyPlant = async () => {
    if (!image) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to identify plant');
      }

      const data = await response.json();
      setResult(data.identification);
    } catch (error) {
      console.error('Error identifying plant:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const features = [
    { 
      icon: <Camera className="h-16 w-16 text-green-500" />, 
      title: "AI-Powered Identification",
      description: "Instantly recognize herbs with our cutting-edge AI technology. Simply snap a photo, and let our system unravel nature's secrets for you."
    },
    { 
      icon: <UserCheck className="h-16 w-16 text-green-500" />, 
      title: "HerbGuru",
      description: "Connect with certified Ayurvedic doctors for personalized consultations. Tap into centuries of wisdom tailored to your unique constitution and needs."
    },
    { 
      icon: <Users className="h-16 w-16 text-green-500" />, 
      title: "Community Forum",
      description: "Join a vibrant community of AYUSH enthusiasts. Share experiences, seek advice, and grow your knowledge in a supportive environment."
    },
    { 
      icon: <Star className="h-16 w-16 text-green-500" />, 
      title: "Personal Herb Collection",
      description: "Curate your digital herb garden. Track your favorite remedies, create custom blends, and monitor your wellness journey all in one place."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.jpg"
            alt="AYUSH Herbs Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Discover the Power of AYUSH
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-green-300 font-semibold mb-8">
            Explore <span className="text-yellow-300">{rotatingText[currentTextIndex]}</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Identify a Herb
            </button>
            <Link
              href="/plants"
              className="px-8 py-3 bg-green-400 text-white font-bold rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Herbs
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-green-800 md:mt-20 mt-10  mb-8 text-center">Why Choose AYUSH?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="mb-4 bg-green-100 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Unlock the Secrets of Traditional Medicine</h2>
            <p className="text-lg text-gray-600 mb-6">
              Dive into the world of AYUSH (Ayurveda, Yoga, Unani, Siddha, and Homeopathy) and discover natural remedies that have been used for centuries.
            </p>
            <ul className="space-y-2">
              {["Learn about medicinal plants", "Understand traditional practices", "Connect with experts", "Improve your well-being"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Leaf className="h-5 w-5 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/collage.jpg"
              alt="AYUSH Collage"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Plant Identification Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                  >
                    Identify Your AYUSH Plant
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex flex-col items-center gap-4">
                      <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-2xl cursor-pointer bg-green-50 hover:bg-green-100 transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-12 h-12 mb-4 text-green-500" />
                          <p className="mb-2 text-sm text-green-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-green-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="file-upload" type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                      </label>
                      <button onClick={handleCameraCapture} className="flex items-center justify-center w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
                        <Camera className="w-5 h-5 mr-2" />
                        Capture Image
                      </button>
                    </div>
                    
                    {preview && (
                      <div className="mt-4 text-center">
                        <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl">
                          <Image src={preview} alt="Preview" layout="fill" objectFit="cover" className="rounded-2xl" />
                        </div>
                        <button 
                          onClick={identifyPlant}
                          disabled={isLoading}
                          className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out inline-flex items-center"
                        >
                          {isLoading ? (
                            <>
                              <Loader className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                              Identifying...
                            </>
                          ) : (
                            <>
                              <Leaf className="mr-2 h-4 w-4" />
                              Identify Plant
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                    {result && (
                      <div className="mt-4 bg-green-50 p-4 rounded-lg">
                        <h4 className="text-xl font-bold mb-2 text-green-800">{result.name}</h4>
                        <p className="text-sm italic mb-2 text-green-600">{result.scientificName}</p>
                        <h5 className="text-lg font-semibold mb-2 text-green-700">Medicinal Uses:</h5>
                        <ul className="list-disc list-inside space-y-1 text-green-900">
                          {result.uses.map((use, index) => (
                            <li key={index} className="text-sm">{use}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}


// "use client"

// import React, { useState } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { MapPin, Camera, Leaf, Users, Star, Upload, Loader, X } from "lucide-react";
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';

// export default function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [result, setResult] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

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
//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       const response = await fetch('/api/identify', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to identify plant');
//       }

//       const data = await response.json();
//       setResult(data.identification);
//     } catch (error) {
//       console.error('Error identifying plant:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative z-10 pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//             <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//               <div className="sm:text-center lg:text-left">
//                 <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
//                   <span className="block xl:inline">Discover the power of</span>{" "}
//                   <span className="block text-green-600 xl:inline">AYUSH Herbs</span>
//                 </h1>
//                 <p className="mt-3 text-lg text-gray-600 font-semibold sm:mt-5 sm:text-xl md:mt-5 lg:mx-0">
//                   Identify and explore Ayurvedic, Yoga, Unani, Siddha, and Homeopathy herbs with our AI-powered platform.
//                 </p>
//                 <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
//                   <button
//                     onClick={() => setIsModalOpen(true)}
//                     className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
//                   >
//                     Identify a Herb
//                   </button>
//                   <Link
//                     href="/plants"
//                     className="mt-3 sm:mt-0 sm:ml-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
//                   >
//                     Explore Herbs
//                   </Link>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//         <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full ">
//           <Image
//             src="/images/hero-image.jpg"
//             alt="Various herbal plants"
//             className="h-72 w-full object-cover sm:h-96 md:h-full lg:h-full hidden md:block"
//             width={1000}
//             height={1000}
//           />
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               Explore the world of AYUSH herbs
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//               Our platform offers a variety of tools to help you identify and learn about AYUSH herbal plants.
//             </p>
//           </div>

//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 name: "AI-Powered Identification",
//                 description: "Upload an image or use your camera to instantly identify AYUSH herbs.",
//                 icon: <Camera className="h-6 w-6 text-white" />,
//               },
//               {
//                 name: "Comprehensive Database",
//                 description: "Access detailed information about a wide variety of AYUSH herbal plants.",
//                 icon: <Leaf className="h-6 w-6 text-white" />,
//               },
//               {
//                 name: "Community Forum",
//                 description: "Connect with other herb enthusiasts, share knowledge, and ask questions.",
//                 icon: <Users className="h-6 w-6 text-white" />,
//               },
//               {
//                 name: "Personal Herb Collection",
//                 description: "Save and organize your favorite herbs for quick reference.",
//                 icon: <Star className="h-6 w-6 text-white" />,
//               },
//             ].map((feature) => (
//               <div key={feature.name} className="relative p-6 bg-gray-50 rounded-lg shadow-lg">
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500">
//                   {feature.icon}
//                 </div>
//                 <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
//                 <p className="mt-2 text-base text-gray-500">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Plant Identification Modal */}
//       <Transition appear show={isModalOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
//                   >
//                     Identify Your AYUSH Plant
//                     <button
//                       onClick={() => setIsModalOpen(false)}
//                       className="text-gray-400 hover:text-gray-500"
//                     >
//                       <X className="h-6 w-6" />
//                     </button>
//                   </Dialog.Title>
//                   <div className="mt-2">
//                     <div className="flex flex-col items-center gap-4">
//                       <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-2xl cursor-pointer bg-green-50 hover:bg-green-100 transition duration-300 ease-in-out">
//                         <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                           <Upload className="w-12 h-12 mb-4 text-green-500" />
//                           <p className="mb-2 text-sm text-green-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                           <p className="text-xs text-green-500">PNG, JPG or GIF (MAX. 800x400px)</p>
//                         </div>
//                         <input id="file-upload" type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
//                       </label>
//                       <button onClick={handleCameraCapture} className="flex items-center justify-center w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
//                         <Camera className="w-5 h-5 mr-2" />
//                         Capture Image
//                       </button>
//                     </div>
                    
//                     {preview && (
//                       <div className="mt-4 text-center">
//                         <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl">
//                           <Image src={preview} alt="Preview" layout="fill" objectFit="cover" className="rounded-2xl" />
//                         </div>
//                         <button 
//                           onClick={identifyPlant}
//                           disabled={isLoading}
//                           className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out inline-flex items-center"
//                         >
//                           {isLoading ? (
//                             <>
//                               <Loader className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
//                               Identifying...
//                             </>
//                           ) : (
//                             <>
//                               <Leaf className="mr-2 h-4 w-4" />
//                               Identify Plant
//                             </>
//                           )}
//                         </button>
//                       </div>
//                     )}
                    
//                     {result && (
//                       <div className="mt-4 bg-green-50 p-4 rounded-lg">
//                         <h4 className="text-xl font-bold mb-2 text-green-800">{result.name}</h4>
//                         <p className="text-sm italic mb-2 text-green-600">{result.scientificName}</p>
//                         <h5 className="text-lg font-semibold mb-2 text-green-700">Medicinal Uses:</h5>
//                         <ul className="list-disc list-inside space-y-1 text-green-900">
//                           {result.uses.map((use, index) => (
//                             <li key={index} className="text-sm">{use}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }