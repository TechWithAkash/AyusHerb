"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function PlantAnalysisPage() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    // Here you would normally send the file to your backend for processing
    // For this example, we'll simulate a response
    const simulatedResponse = {
      plantName: 'Ashwagandha',
      properties: {
        vata: 30,
        pitta: 40,
        kapha: 30,
        rasa: 'Bitter, Astringent',
        guna: 'Light, Dry',
        virya: 'Warming',
        vipaka: 'Pungent'
      }
    };

    setAnalysis(simulatedResponse);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Plant Analysis</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="file" onChange={handleFileChange} accept="image/*" className="mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Analyze Plant</button>
      </form>

      {file && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Uploaded Image:</h2>
          <Image src={URL.createObjectURL(file)} alt="Uploaded plant" width={300} height={300} />
        </div>
      )}

      {analysis && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Analysis Result:</h2>
          <p className="mb-2">Identified Plant: {analysis.plantName}</p>
          <AyurvedicPropertiesAnalyzer plantName={analysis.plantName} properties={analysis.properties} />
        </div>
      )}
    </div>
  );
}