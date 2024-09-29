"use client"
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Leaf, Calendar, BookOpen, Award } from 'lucide-react';
import Image from 'next/image';

const PlantCard = ({ plant, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
  >
    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
      <Image src={plant.image} alt={plant.name} layout="fill" objectFit="cover" />
    </div>
    <h3 className="text-xl font-bold text-green-800 mb-2">{plant.name}</h3>
    <p className="text-sm text-green-600 italic mb-2">{plant.scientificName}</p>
    <p className="text-sm text-gray-600 mb-4">{plant.identifiedDate}</p>
    <div className="flex items-center text-yellow-500">
      <Award className="w-5 h-5 mr-1" />
      <span className="text-sm font-semibold">{plant.ayushScore} AYUSH Points</span>
    </div>
  </motion.div>
);

const AYUSHPracticeCard = ({ practice }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-xl p-6 text-white"
  >
    <h3 className="text-xl font-bold mb-2">{practice.name}</h3>
    <p className="text-sm mb-4">{practice.description}</p>
    <button className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition-colors duration-300">
      Learn More
    </button>
  </motion.div>
);

export default function AYUSHPlantJourney() {
  const [plants, setPlants] = useState([]);
  const [ayushPractices, setAyushPractices] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    // Simulated data - in a real app, you'd fetch this from an API
    setPlants([
      { id: 1, name: 'Tulsi', scientificName: 'Ocimum sanctum', identifiedDate: '2024-09-15', ayushScore: 85, image: '/images/ginger-root.jpg' },
      { id: 2, name: 'Ashwagandha', scientificName: 'Withania somnifera', identifiedDate: '2024-09-20', ayushScore: 92, image: '/images/ash.jpg' },
      { id: 3, name: 'Brahmi', scientificName: 'Bacopa monnieri', identifiedDate: '2024-09-25', ayushScore: 78, image: '/images/neem.jpeg' },
    ]);

    setAyushPractices([
      { id: 1, name: 'Ayurvedic Tea Ritual', description: 'Start your day with a healing Ayurvedic tea blend.' },
      { id: 2, name: 'Yoga for Plant Energy', description: 'A yoga sequence inspired by the plants youve identified.' },
      { id: 3, name: 'Herbal Meditation', description: 'Meditate with the essence of your identified plants.' },
    ]);

    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-center text-green-800 mb-12">
          Your AYUSH Plant Journey
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plants.map((plant, index) => (
            <PlantCard key={plant.id} plant={plant} index={index} />
          ))}
        </div>

        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <Calendar className="w-8 h-8 mr-2 text-green-600" />
            Your AYUSH Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            {plants.map((plant, index) => (
              <motion.div
                key={plant.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <h3 className="text-xl font-bold text-green-700">{plant.name}</h3>
                  <p className="text-sm text-gray-600">{plant.identifiedDate}</p>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 mr-2 text-green-600" />
            Recommended AYUSH Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ayushPractices.map((practice) => (
              <AYUSHPracticeCard key={practice.id} practice={practice} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">Your AYUSH Journey Stats</h2>
          <div className="bg-white rounded-full shadow-lg p-8 inline-block">
            <div className="flex items-center justify-center">
              <Leaf className="w-12 h-12 text-green-500 mr-4" />
              <div>
                <p className="text-4xl font-bold text-green-600">255</p>
                <p className="text-sm text-gray-600">Total AYUSH Points</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}