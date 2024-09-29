// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Card, CardHeader, CardContent } from '@/components/ui/card';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const AyurvedicPropertiesAnalyzer = ({ plantName, properties }) => {
//   const data = {
//     labels: ['Vata', 'Pitta', 'Kapha'],
//     datasets: [
//       {
//         data: [properties.vata, properties.pitta, properties.kapha],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader className="text-center font-bold">{plantName} - Ayurvedic Properties</CardHeader>
//       <CardContent>
//         <div className="mb-4">
//           <Doughnut data={data} />
//         </div>
//         <div className="text-sm">
//           <p><strong>Rasa (Taste):</strong> {properties.rasa}</p>
//           <p><strong>Guna (Quality):</strong> {properties.guna}</p>
//           <p><strong>Virya (Potency):</strong> {properties.virya}</p>
//           <p><strong>Vipaka (Post-digestive effect):</strong> {properties.vipaka}</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default AyurvedicPropertiesAnalyzer;