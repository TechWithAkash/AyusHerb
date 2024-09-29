// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { AlertCircle, Leaf, Star, ThumbsUp, Activity, Search, Info, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import Image from 'next/image';

// // Expanded herb data
// const herbData = [
//   {
//     name: 'Ashwagandha',
//     scientificName: 'Withania somnifera',
//     benefits: 'Stress reduction, improved cognitive function, enhanced physical performance',
//     rating: 4.7,
//     usage: 'Take 300-500 mg of root extract twice daily',
//     imageUrl: '/api/placeholder/400/300',
//     symptoms: ['stress', 'anxiety', 'fatigue', 'poor concentration']
//   },
//   {
//     name: 'Tulsi',
//     scientificName: 'Ocimum sanctum',
//     benefits: 'Respiratory health, stress relief, immune system support',
//     rating: 4.5,
//     usage: 'Consume 2-3 leaves daily or drink as tea',
//     imageUrl: '/api/placeholder/400/300',
//     symptoms: ['cough', 'cold', 'stress', 'fever']
//   },
//   {
//     name: 'Brahmi',
//     scientificName: 'Bacopa monnieri',
//     benefits: 'Memory enhancement, reduced anxiety, improved concentration',
//     rating: 4.3,
//     usage: 'Take 300 mg of extract daily',
//     imageUrl: '/api/placeholder/400/300',
//     symptoms: ['poor memory', 'anxiety', 'ADHD']
//   },
//   {
//     name: 'Turmeric',
//     scientificName: 'Curcuma longa',
//     benefits: 'Anti-inflammatory, antioxidant, potential cancer-fighting properties',
//     rating: 4.8,
//     usage: 'Consume 500-2000 mg of turmeric powder daily',
//     imageUrl: '/api/placeholder/400/300',
//     symptoms: ['inflammation', 'joint pain', 'digestive issues']
//   },
//   {
//     name: 'Ginger',
//     scientificName: 'Zingiber officinale',
//     benefits: 'Digestive aid, anti-nausea, anti-inflammatory',
//     rating: 4.6,
//     usage: 'Consume 1-3 g of ginger root daily',
//     imageUrl: '/api/placeholder/400/300',
//     symptoms: ['nausea', 'motion sickness', 'digestive discomfort']
//   },
//   {
//     name: 'Amla',
//     scientificName: 'Emblica officinalis',
//     benefits: 'Vitamin C source, immune booster, hair and skin health',
//     rating: 4.4,
//     usage: 'Take 1-2 tsp of amla powder daily',
//     imageUrl: '/api/placeholder/400/300',
//     symptoms: ['weak immunity', 'hair loss', 'skin problems']
//   },
//   // ... Add more herbs to reach 20-25 total
// ];

// const SymptomForm = ({ onSubmit }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <Input
//         {...register('name', { required: 'Name is required' })}
//         placeholder="Your Name"
//         className="bg-white text-lg"
//       />
//       {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//       <Textarea
//         {...register('symptoms', { required: 'Please describe your symptoms' })}
//         placeholder="Describe your symptoms or health concerns"
//         rows={4}
//         className="bg-white text-lg"
//       />
//       {errors.symptoms && <p className="text-red-500 text-sm">{errors.symptoms.message}</p>}
//       <Button type="submit" className="w-full text-lg">
//         <Search className="mr-2 h-5 w-5" /> Get Personalized Recommendations
//       </Button>
//     </form>
//   );
// };

// const HerbCard = ({ herb }) => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   return (
//     <Card className="mb-6 overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/3">
//           <Image src={herb.imageUrl} alt={herb.name} className="w-full h-full object-cover" />
//         </div>
//         <div className="md:w-2/3 p-6">
//           <CardHeader>
//             <CardTitle className="flex justify-between items-center">
//               <span className="text-2xl font-bold">{herb.name}</span>
//               <Badge variant="secondary" className="text-lg">
//                 <Star className="h-4 w-4 mr-1 inline" fill="currentColor" /> {herb.rating.toFixed(1)}
//               </Badge>
//             </CardTitle>
//             <p className="text-sm text-gray-500 italic">{herb.scientificName}</p>
//           </CardHeader>
//           <CardContent>
//             <p className="mb-2"><strong>Benefits:</strong> {herb.benefits}</p>
//             <p><strong>Usage:</strong> {herb.usage}</p>
//           </CardContent>
//           <CardFooter className="flex justify-between">
//             <Button variant="outline" className="w-1/2 mr-2">
//               <ThumbsUp className="mr-2 h-4 w-4" /> Helpful
//             </Button>
//             <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button variant="secondary" className="w-1/2 ml-2">
//                   <Info className="mr-2 h-4 w-4" /> Learn More
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-2xl">
//                 <DialogHeader>
//                   <DialogTitle>{herb.name}</DialogTitle>
//                   <DialogDescription>{herb.scientificName}</DialogDescription>
//                 </DialogHeader>
//                 <div className="mt-4">
//                   <h4 className="font-semibold mb-2">Benefits:</h4>
//                   <p>{herb.benefits}</p>
//                   <h4 className="font-semibold mt-4 mb-2">Recommended Usage:</h4>
//                   <p>{herb.usage}</p>
//                   <h4 className="font-semibold mt-4 mb-2">Common Symptoms Treated:</h4>
//                   <ul className="list-disc list-inside">
//                     {herb.symptoms.map((symptom, index) => (
//                       <li key={index}>{symptom}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </CardFooter>
//         </div>
//       </div>
//     </Card>
//   );
// };

// const AYUSHHealthAdvisor = () => {
//   const [activeTab, setActiveTab] = useState('symptoms');
//   const [analysisResult, setAnalysisResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (data) => {
//     setLoading(true);
//     // Simulate API call with more sophisticated matching
//     setTimeout(() => {
//       const userSymptoms = data.symptoms.toLowerCase().split(/[,.\s]+/);
//       const matchedHerbs = herbData.filter(herb => 
//         herb.symptoms.some(symptom => userSymptoms.includes(symptom))
//       ).sort((a, b) => b.rating - a.rating).slice(0, 5);

//       setAnalysisResult({
//         categories: [...new Set(matchedHerbs.flatMap(herb => herb.symptoms))],
//         recommendations: matchedHerbs
//       });
//       setActiveTab('recommendations');
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen">
//       <h1 className="text-5xl font-bold text-center mb-12 text-green-800 tracking-tight">HerbGuru</h1>
      
//       <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-2xl p-8 shadow-xl">
//         <TabsList className="grid w-full grid-cols-2 mb-8">
//           <TabsTrigger value="symptoms" className="text-xl py-3">
//             <Activity className="mr-2 h-6 w-6" /> Symptoms
//           </TabsTrigger>
//           <TabsTrigger value="recommendations" disabled={!analysisResult} className="text-xl py-3">
//             <Leaf className="mr-2 h-6 w-6" /> Recommendations
//           </TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="symptoms">
//           <Card className="border-0 shadow-none">
//             <CardHeader>
//               <CardTitle className="text-3xl mb-2">Describe Your Symptoms</CardTitle>
//               <p className="text-gray-600">Tell us how you're feeling, and we'll suggest natural remedies.</p>
//             </CardHeader>
//             <CardContent>
//               <SymptomForm onSubmit={handleSubmit} />
//             </CardContent>
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="recommendations">
//           {loading ? (
//             <div className="text-center py-12">
//               <Progress value={33} className="w-1/2 mx-auto mb-4" />
//               <p className="text-xl text-gray-600">Analyzing your symptoms...</p>
//             </div>
//           ) : analysisResult && (
//             <>
//               <Alert className="mb-8 bg-green-100 border-green-300">
//                 <AlertCircle className="h-6 w-6 text-green-800" />
//                 <AlertTitle className="text-2xl font-semibold text-green-800 mb-2">Analysis Result</AlertTitle>
//                 <AlertDescription className="text-green-800">
//                 <p>Based on your symptoms, we&apos;ve identified these health categories:</p>
//                 <div className="flex flex-wrap gap-2 mt-4">
//                     {analysisResult.categories.map((category, index) => (
//                       <Badge key={index} variant="secondary" className="text-lg py-1 px-3">
//                         {category}
//                       </Badge>
//                     ))}
//                   </div>
//                 </AlertDescription>
//               </Alert>
              
//               <h2 className="text-3xl font-semibold mb-8 text-green-800">Recommended Herbs</h2>
//               {analysisResult.recommendations.map((herb, index) => (
//                 <HerbCard key={index} herb={herb} />
//               ))}
//             </>
//           )}
//         </TabsContent>
//       </Tabs>

//       <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl">
//         <h3 className="text-3xl font-semibold mb-6 text-green-800">How It Works</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { title: 'Analyze Symptoms', description: 'Our AI processes your symptoms to understand your health needs.', icon: Activity },
//             { title: 'Match with Herbs', description: 'We match your health profile with beneficial AYUSH herbs.', icon: Leaf },
//             { title: 'Personalized Advice', description: 'Receive tailored recommendations for your well-being.', icon: ThumbsUp }
//           ].map((step, index) => (
//             <Card key={index} className="bg-green-50 hover:shadow-md transition-shadow duration-300">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-4">
//                   <step.icon className="h-6 w-6 text-green-800" />
//                 </div>
//                 <CardTitle className="text-2xl">{step.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">{step.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* <footer className="mt-12 text-center text-gray-600">
//         <p>© 2024 HerbGuru. All rights reserved.</p>
//         <p className="mt-2">
//           <Button variant="link" className="text-green-800 hover:text-green-600">
//             Terms of Service <ArrowRight className="ml-1 h-4 w-4 inline" />
//           </Button>
//           <Button variant="link" className="text-green-800 hover:text-green-600 ml-4">
//             Privacy Policy <ArrowRight className="ml-1 h-4 w-4 inline" />
//           </Button>
//         </p>
//       </footer> */}
//     </div>
//   );
// };

// export default AYUSHHealthAdvisor;