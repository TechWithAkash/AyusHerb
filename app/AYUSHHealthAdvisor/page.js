"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle, Leaf, Star, ThumbsUp, Activity, Search, Info, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Expanded herb data
const herbData = [
    {
      name: 'Ashwagandha',
      scientificName: 'Withania somnifera',
      benefits: 'Stress reduction, improved cognitive function, enhanced physical performance',
      rating: 4.7,
      usage: 'Take 300-500 mg of root extract twice daily',
      imageUrl: '/images/ash.jpg',
      symptoms: ['stress', 'anxiety', 'fatigue', 'poor concentration']
    },
    {
      name: 'Tulsi',
      scientificName: 'Ocimum sanctum',
      benefits: 'Respiratory health, stress relief, immune system support',
      rating: 4.5,
      usage: 'Consume 2-3 leaves daily or drink as tea',
      imageUrl: '/images/tulsi.jpg',
      symptoms: ['cough', 'cold', 'stress', 'fever']
    },
    {
      name: 'Brahmi',
      scientificName: 'Bacopa monnieri',
      benefits: 'Memory enhancement, reduced anxiety, improved concentration',
      rating: 4.3,
      usage: 'Take 300 mg of extract daily',
      imageUrl: '/images/brahmi.jpg',
      symptoms: ['poor memory', 'anxiety', 'ADHD']
    },
    {
      name: 'Turmeric',
      scientificName: 'Curcuma longa',
      benefits: 'Anti-inflammatory, antioxidant, potential cancer-fighting properties',
      rating: 4.8,
      usage: 'Consume 500-2000 mg of turmeric powder daily',
      imageUrl: '/images/turmeric.jpg',
      symptoms: ['inflammation', 'joint pain', 'digestive issues']
    },
    {
      name: 'Ginger',
      scientificName: 'Zingiber officinale',
      benefits: 'Digestive aid, anti-nausea, anti-inflammatory',
      rating: 4.6,
      usage: 'Consume 1-3 g of ginger root daily',
      imageUrl: '/images/ginger.jpg',
      symptoms: ['nausea', 'motion sickness', 'digestive discomfort']
    },
    {
      name: 'Amla',
      scientificName: 'Emblica officinalis',
      benefits: 'Vitamin C source, immune booster, hair and skin health',
      rating: 4.4,
      usage: 'Take 1-2 tsp of amla powder daily',
      imageUrl: '/images/amla.jpeg',
      symptoms: ['weak immunity', 'hair loss', 'skin problems']
    },
    {
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      benefits: 'Skin health, antibacterial, supports liver function',
      rating: 4.5,
      usage: 'Apply neem oil on the skin or consume 1-2 tsp neem leaf powder',
      imageUrl: '/images/neem.jpg',
      symptoms: ['acne', 'skin infections', 'liver issues']
    },
    {
      name: 'Shatavari',
      scientificName: 'Asparagus racemosus',
      benefits: 'Female reproductive health, hormone balance, antioxidant',
      rating: 4.6,
      usage: 'Consume 500 mg of Shatavari root powder daily',
      imageUrl: '/images/shatavari.jpg',
      symptoms: ['hormonal imbalance', 'menopause', 'low libido']
    },
    {
      name: 'Licorice',
      scientificName: 'Glycyrrhiza glabra',
      benefits: 'Digestive aid, respiratory support, anti-inflammatory',
      rating: 4.3,
      usage: 'Take 1-2 grams of licorice root extract daily',
      imageUrl: '/images/licorice.jpg',
      symptoms: ['acid reflux', 'cough', 'sore throat']
    },
    {
      name: 'Fenugreek',
      scientificName: 'Trigonella foenum-graecum',
      benefits: 'Blood sugar regulation, digestion, promotes lactation',
      rating: 4.4,
      usage: 'Take 1-2 tsp of fenugreek seeds daily',
      imageUrl: '/images/fenugreek.jpg',
      symptoms: ['high blood sugar', 'indigestion', 'low milk supply']
    },
    {
      name: 'Moringa',
      scientificName: 'Moringa oleifera',
      benefits: 'Nutrient-rich, antioxidant, anti-inflammatory',
      rating: 4.7,
      usage: 'Take 1-2 tsp of Moringa powder daily',
      imageUrl: '/images/Moringa.jpg',
      symptoms: ['low energy', 'inflammation', 'nutrient deficiency']
    },
    {
      name: 'Guggul',
      scientificName: 'Commiphora mukul',
      benefits: 'Supports cholesterol levels, promotes joint health, weight loss aid',
      rating: 4.2,
      usage: 'Take 75 mg of Guggul extract twice daily',
      imageUrl: '/images/Guggul.jpeg',
      symptoms: ['high cholesterol', 'arthritis', 'obesity']
    },
    {
      name: 'Gotu Kola',
      scientificName: 'Centella asiatica',
      benefits: 'Brain health, wound healing, anxiety relief',
      rating: 4.5,
      usage: 'Take 500 mg of Gotu Kola extract daily',
      imageUrl: '/images/Gotu Kola.jpeg',
      symptoms: ['poor memory', 'wound healing', 'anxiety']
    },
    {
      name: 'Triphala',
      scientificName: 'Triphala churna',
      benefits: 'Digestive support, detoxification, anti-inflammatory',
      rating: 4.8,
      usage: 'Take 1-2 tsp of Triphala powder daily',
      imageUrl: '/images/Triphala.jpg',
      symptoms: ['constipation', 'digestive discomfort', 'toxins in the body']
    },
    {
      name: 'Manjistha',
      scientificName: 'Rubia cordifolia',
      benefits: 'Detoxification, skin health, lymphatic support',
      rating: 4.6,
      usage: 'Take 500 mg of Manjistha extract daily',
      imageUrl: '/images/Manjistha.jpg',
      symptoms: ['acne', 'eczema', 'toxin build-up']
    },
    {
      name: 'Guduchi',
      scientificName: 'Tinospora cordifolia',
      benefits: 'Immunity booster, anti-inflammatory, antioxidant',
      rating: 4.5,
      usage: 'Take 1-2 tsp of Guduchi powder daily',
      imageUrl: '/images/guduchi.jpg',
      symptoms: ['weak immunity', 'chronic fever', 'inflammation']
    },
    {
      name: 'Karela',
      scientificName: 'Momordica charantia',
      benefits: 'Blood sugar regulation, liver health, skin health',
      rating: 4.4,
      usage: 'Take 1-2 tsp of Karela juice daily',
      imageUrl: '/images/karela.jpg',
      symptoms: ['high blood sugar', 'liver issues', 'skin conditions']
    },
    {
      name: 'Arjuna',
      scientificName: 'Terminalia arjuna',
      benefits: 'Heart health, blood pressure regulation, antioxidant',
      rating: 4.7,
      usage: 'Take 500 mg of Arjuna bark extract daily',
      imageUrl: '/images/arjuna.jpeg',
      symptoms: ['high blood pressure', 'heart disease', 'weak heart']
    },
    {
      name: 'Jatamansi',
      scientificName: 'Nardostachys jatamansi',
      benefits: 'Nervous system support, promotes sleep, reduces anxiety',
      rating: 4.6,
      usage: 'Take 250 mg of Jatamansi extract daily',
      imageUrl: '/images/jatamansi.jpg',
      symptoms: ['insomnia', 'anxiety', 'stress']
    },
    {
      name: 'Shankhapushpi',
      scientificName: 'Convolvulus pluricaulis',
      benefits: 'Brain tonic, memory enhancement, stress relief',
      rating: 4.6,
      usage: 'Take 1-2 tsp of Shankhapushpi extract daily',
      imageUrl: '/images/shankhapushpi.jpeg',
      symptoms: ['poor memory', 'stress', 'mental fatigue']
    }
  ];
  

const SymptomForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        {...register('name', { required: 'Name is required' })}
        placeholder="Your Name"
        className="bg-white text-lg"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      <Textarea
        {...register('symptoms', { required: 'Please describe your symptoms' })}
        placeholder="Describe your symptoms or health concerns"
        rows={4}
        className="bg-white text-lg"
      />
      {errors.symptoms && <p className="text-red-500 text-sm">{errors.symptoms.message}</p>}
      <Button type="submit" className="w-full text-lg">
        <Search className="mr-2 h-5 w-5" /> Get Personalized Recommendations
      </Button>
    </form>
  );
};

const HerbCard = ({ herb }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Card className="mb-6 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={herb.imageUrl} alt={herb.name} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span className="text-2xl font-bold">{herb.name}</span>
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
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-1/2 mr-2">
              <ThumbsUp className="mr-2 h-4 w-4" /> Helpful
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="w-1/2 ml-2">
                  <Info className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{herb.name}</DialogTitle>
                  <DialogDescription>{herb.scientificName}</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <p>{herb.benefits}</p>
                  <h4 className="font-semibold mt-4 mb-2">Recommended Usage:</h4>
                  <p>{herb.usage}</p>
                  <h4 className="font-semibold mt-4 mb-2">Common Symptoms Treated:</h4>
                  <ul className="list-disc list-inside">
                    {herb.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

const AYUSHHealthAdvisor = () => {
  const [activeTab, setActiveTab] = useState('symptoms');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data) => {
    setLoading(true);
    // Simulate API call with more sophisticated matching
    setTimeout(() => {
      const userSymptoms = data.symptoms.toLowerCase().split(/[,.\s]+/);
      const matchedHerbs = herbData.filter(herb => 
        herb.symptoms.some(symptom => userSymptoms.includes(symptom))
      ).sort((a, b) => b.rating - a.rating).slice(0, 5);

      setAnalysisResult({
        categories: [...new Set(matchedHerbs.flatMap(herb => herb.symptoms))],
        recommendations: matchedHerbs
      });
      setActiveTab('recommendations');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-800 tracking-tight">HerbGuru</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-2xl p-8 shadow-xl">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="symptoms" className="text-xl py-3">
            <Activity className="mr-2 h-6 w-6" /> Symptoms
          </TabsTrigger>
          <TabsTrigger value="recommendations" disabled={!analysisResult} className="text-xl py-3">
            <Leaf className="mr-2 h-6 w-6" /> Recommendations
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="symptoms">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-3xl mb-2">Describe Your Symptoms</CardTitle>
              <p className="text-gray-600">Tell us how you're feeling, and we'll suggest natural remedies.</p>
            </CardHeader>
            <CardContent>
              <SymptomForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations">
          {loading ? (
            <div className="text-center py-12">
              <Progress value={33} className="w-1/2 mx-auto mb-4" />
              <p className="text-xl text-gray-600">Analyzing your symptoms...</p>
            </div>
          ) : analysisResult && (
            <>
              <Alert className="mb-8 bg-green-100 border-green-300">
                <AlertCircle className="h-6 w-6 text-green-800" />
                <AlertTitle className="text-2xl font-semibold text-green-800 mb-2">Analysis Result</AlertTitle>
                <AlertDescription className="text-green-800">
                  Based on your symptoms, we've identified these health categories:
                  <div className="flex flex-wrap gap-2 mt-4">
                    {analysisResult.categories.map((category, index) => (
                      <Badge key={index} variant="secondary" className="text-lg py-1 px-3">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </AlertDescription>
              </Alert>
              
              <h2 className="text-3xl font-semibold mb-8 text-green-800">Recommended Herbs</h2>
              {analysisResult.recommendations.map((herb, index) => (
                <HerbCard key={index} herb={herb} />
              ))}
            </>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-3xl font-semibold mb-6 text-green-800">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Analyze Symptoms', description: 'Our AI processes your symptoms to understand your health needs.', icon: Activity },
            { title: 'Match with Herbs', description: 'We match your health profile with beneficial AYUSH herbs.', icon: Leaf },
            { title: 'Personalized Advice', description: 'Receive tailored recommendations for your well-being.', icon: ThumbsUp }
          ].map((step, index) => (
            <Card key={index} className="bg-green-50 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-green-800" />
                </div>
                <CardTitle className="text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AYUSHHealthAdvisor;