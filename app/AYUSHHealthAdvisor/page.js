"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle, Leaf, Star, ThumbsUp, Activity, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const mockHerbData = [
  {
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    benefits: 'Stress reduction, improved cognitive function, enhanced physical performance',
    rating: 4.7,
    usage: 'Take 300-500 mg of root extract twice daily',
    imageUrl: '/images/ash.jpg'
  },
  {
    name: 'Tulsi',
    scientificName: 'Ocimum sanctum',
    benefits: 'Respiratory health, stress relief, immune system support',
    rating: 4.5,
    usage: 'Consume 2-3 leaves daily or drink as tea',
    imageUrl: '/images/hero-image.jpg'
  },
  {
    name: 'Brahmi',
    scientificName: 'Bacopa monnieri',
    benefits: 'Memory enhancement, reduced anxiety, improved concentration',
    rating: 4.3,
    usage: 'Take 300 mg of extract daily',
    imageUrl: '/images/neem.jpeg'
  }
];

const SymptomForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('name', { required: 'Name is required' })}
        placeholder="Your Name"
        className="bg-white"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      <Textarea
        {...register('symptoms', { required: 'Please describe your symptoms' })}
        placeholder="Describe your symptoms or health concerns"
        rows={4}
        className="bg-white"
      />
      {errors.symptoms && <p className="text-red-500 text-sm">{errors.symptoms.message}</p>}
      <Button type="submit" className="w-full">
        <Search className="mr-2 h-4 w-4" /> Get Personalized Recommendations
      </Button>
    </form>
  );
};

const HerbCard = ({ herb }) => (
  <Card className="mb-6 overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img src={herb.imageUrl} alt={herb.name} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-2/3 p-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{herb.name}</span>
            <Badge variant="secondary" className="text-lg">
              <Star className="h-4 w-4 mr-1 inline" fill="currentColor" /> {herb.rating.toFixed(1)}
            </Badge>
          </CardTitle>
          <p className="text-sm text-gray-500 italic">{herb.scientificName}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-2"><strong>Benefits:</strong> {herb.benefits}</p>
          <p><strong>Usage:</strong> {herb.usage}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <ThumbsUp className="mr-2 h-4 w-4" /> Mark as Helpful
          </Button>
        </CardFooter>
      </div>
    </div>
  </Card>
);

const EnhancedAYUSHHealthAdvisor = () => {
  const [activeTab, setActiveTab] = useState('symptoms');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleSubmit = (data) => {
    // Simulate API call
    setTimeout(() => {
      setAnalysisResult({
        categories: ['Stress', 'Cognitive Function', 'Immunity'],
        recommendations: mockHerbData
      });
      setActiveTab('recommendations');
    }, 1500);
  };

  return (
    <div className="max-w-6xl mt-4 mx-auto p-4 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">HerbGuru</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-lg p-6 shadow-md">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="symptoms" className="text-lg">
            <Activity className="mr-2 h-5 w-5" /> Symptoms
          </TabsTrigger>
          <TabsTrigger value="recommendations" disabled={!analysisResult} className="text-lg">
            <Leaf className="mr-2 h-5 w-5" /> Recommendations
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="symptoms">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Describe Your Symptoms</CardTitle>
            </CardHeader>
            <CardContent>
              <SymptomForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations">
          {analysisResult && (
            <>
              <Alert className="mb-6 bg-green-100 border-green-300">
                <AlertCircle className="h-5 w-5 text-green-800" />
                <AlertTitle className="text-xl font-semibold text-green-800">Analysis Result</AlertTitle>
                <AlertDescription className="text-green-800">
                  Based on your symptoms, we've identified these health categories:
                  <div className="flex flex-wrap gap-2 mt-3">
                    {analysisResult.categories.map((category, index) => (
                      <Badge key={index} variant="secondary" className="text-lg py-1 px-3">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </AlertDescription>
              </Alert>
              
              <h2 className="text-3xl font-semibold mb-6 text-green-800">Recommended Herbs</h2>
              {analysisResult.recommendations.map((herb, index) => (
                <HerbCard key={index} herb={herb} />
              ))}
            </>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-green-800">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Analyze Symptoms', description: 'Our AI processes your symptoms to understand your health needs.' },
            { title: 'Match with Herbs', description: 'We match your health profile with beneficial AYUSH herbs.' },
            { title: 'Personalized Advice', description: 'Receive tailored recommendations for your well-being.' }
          ].map((step, index) => (
            <Card key={index} className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedAYUSHHealthAdvisor;