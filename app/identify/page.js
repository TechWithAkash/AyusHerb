  // // app/identify/page.js
  // 'use client'

  // import { useState } from 'react'
  // import Image from 'next/image'
  // import ImageUpload from '@/component/ImageUpload'
  // import CameraCapture from '@/component/CameraCapture'

  // export default function Identify() {
  //   const [image, setImage] = useState(null)
  //   const [result, setResult] = useState(null)
  //   const [isLoading, setIsLoading] = useState(false)

  //   const handleImageCapture = (imageData) => {
  //     setImage(imageData)
  //   }

  //   const identifyPlant = async () => {
  //     setIsLoading(true)
  //     try {
  //       const formData = new FormData()
  //       formData.append('image', image)
        
  //       const response = await fetch('/api/identify', {
  //         method: 'POST',
  //         body: formData,
  //       })
        
  //       const data = await response.json()
  //       setResult(data.identification)
  //     } catch (error) {
  //       console.error('Error identifying plant:', error)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   return (
  //     <div className="max-w-2xl mx-auto">
  //       <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Identify a Plant</h1>
  //       <div className="mb-6">
  //         <ImageUpload onCapture={handleImageCapture} />
  //         <CameraCapture onCapture={handleImageCapture} />
  //       </div>
  //       {image && (
  //         <div className="mb-6">
  //           <Image src={image} alt="Captured plant" width={400} height={400} className="rounded-lg mx-auto" />
  //         </div>
  //       )}
  //       <button 
  //         onClick={identifyPlant}
  //         disabled={!image || isLoading}
  //         className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
  //       >
  //         {isLoading ? 'Identifying...' : 'Identify Plant'}
  //       </button>
  //       {result && (
  //         <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
  //           <h2 className="text-2xl font-bold mb-4 text-green-800">{result.name}</h2>
  //           <p className="text-lg italic mb-4 text-green-600">{result.scientificName}</p>
  //           <h3 className="text-xl font-semibold mb-2 text-green-700">Medicinal Uses:</h3>
  //           <ul className="list-disc list-inside space-y-2 text-green-900">
  //             {result.uses.map((use, index) => (
  //               <li key={index}>{use}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   )
  // }

  "use client"
  import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Upload, Loader, Leaf } from 'lucide-react';

export default function Identify() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-green-800 mb-12 animate-fade-in-down">
          Discover Your AYUSH Plant
        </h1>
        
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-12 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="w-full md:w-1/2">
              <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-2xl cursor-pointer bg-green-50 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-12 h-12 mb-4 text-green-500" />
                  <p className="mb-2 text-sm text-green-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-green-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="file-upload" type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
              </label>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <button onClick={handleCameraCapture} className="flex items-center justify-center w-64 h-64 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
                <Camera className="w-20 h-20" />
              </button>
            </div>
          </div>
          
          {preview && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl">
                <Image src={preview} alt="Preview" layout="fill" objectFit="cover" className="rounded-2xl" />
              </div>
              <button 
                onClick={identifyPlant}
                disabled={isLoading}
                className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out inline-flex items-center transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" />
                    Identifying...
                  </>
                ) : (
                  <>
                    <Leaf className="mr-2 h-6 w-6" />
                    Identify Plant
                  </>
                )}
              </button>
            </div>
          )}
        </div>
        
        {result && (
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-green-800">{result.name}</h2>
            <p className="text-2xl italic mb-6 text-green-600">{result.scientificName}</p>
            <h3 className="text-3xl font-semibold mb-4 text-green-700">Medicinal Uses:</h3>
            <ul className="list-none space-y-4 text-green-900">
              {result.uses.map((use, index) => (
                <li key={index} className="flex items-start">
                  <Leaf className="mr-2 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-xl">{use}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}