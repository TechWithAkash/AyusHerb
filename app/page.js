// "use client"
// import React, { useState, useEffect } from 'react';
// import Spline from '@splinetool/react-spline/next';
// import { Menu, X, ChevronDown, ChevronUp, Brain } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center space-x-2">
//             <Brain className="text-purple-500 h-8 w-8" />
//             <span className="text-white text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//               NeuroSphere AI
//             </span>
//           </div>
//           <div className="hidden md:flex space-x-1">
//             <NavItem href="#home">Home</NavItem>
//             <NavItem href="#news">AI News</NavItem>
//             <NavItem href="#about">About</NavItem>
//             <NavItem href="#contact">Contact</NavItem>
//           </div>
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <MobileNavItem href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavItem>
//             <MobileNavItem href="#news" onClick={() => setIsOpen(false)}>AI News</MobileNavItem>
//             <MobileNavItem href="#about" onClick={() => setIsOpen(false)}>About</MobileNavItem>
//             <MobileNavItem href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavItem>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavItem = ({ href, children }) => (
//   <a
//     href={href}
//     className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group"
//   >
//     {children}
//     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//   </a>
// );

// const MobileNavItem = ({ href, onClick, children }) => (
//   <a
//     href={href}
//     className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
//     onClick={onClick}
//   >
//     {children}
//   </a>
// );

// const HeroSection = () => (
//   <div id="home" className="relative h-screen">
//     <Spline
//       className="absolute inset-0 w-full h-full"
//       scene="https://prod.spline.design/ocbmZu8OgdKts8oZ/scene.splinecode"
//     />
//     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold text-white mb-4">Welcome to NeuroSphere AI</h1>
//         <p className="text-xl text-gray-200 mb-8">Shaping the future with intelligent innovations</p>
//         <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-lg font-semibold">
//           Explore Now
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const NewsItem = ({ title, description }) => (
//   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//     <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
//     <p className="text-gray-300">{description}</p>
//   </div>
// );

// const AINewsSection = () => {
//   const [news, setNews] = useState([]);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     // In a real application, you would fetch this data from an API
//     setNews([
//       { title: "GPT-4 Breaks New Ground in Natural Language Processing", description: "OpenAI's latest model shows unprecedented capabilities in understanding and generating human-like text." },
//       { title: "AI-Powered Drug Discovery Yields Promising Results", description: "Researchers use machine learning to identify potential treatments for previously incurable diseases." },
//       { title: "Quantum Computing Milestone Achieved", description: "Scientists demonstrate quantum supremacy, opening new possibilities for AI and machine learning applications." },
//       { title: "Ethical AI Framework Proposed by Leading Tech Companies", description: "Industry giants collaborate on guidelines for responsible AI development and deployment." },
//     ]);
//   }, []);

//   return (
//     <section id="news" className="py-16 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest AI News</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {news.slice(0, expanded ? news.length : 2).map((item, index) => (
//             <NewsItem key={index} title={item.title} description={item.description} />
//           ))}
//         </div>
//         {news.length > 2 && (
//           <div className="text-center mt-8">
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="flex items-center mx-auto text-white bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors"
//             >
//               {expanded ? 'Show Less' : 'Show More'}
//               {expanded ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const Footer = () => (
//   <footer className="bg-black text-white py-8">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-wrap justify-between items-center">
//         <div className="w-full md:w-1/3 mb-6 md:mb-0">
//           <h3 className="text-2xl font-bold mb-2">NeuroSphere AI</h3>
//           <p className="text-gray-400">Innovating for a smarter tomorrow</p>
//         </div>
//         <div className="w-full md:w-1/3 mb-6 md:mb-0">
//           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/3">
//           <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
//         © 2024 NeuroSphere AI. All rights reserved.
//       </div>
//     </div>
//   </footer>
// );

// export default function Home() {
//   return (
//     <main className="flex flex-col min-h-screen">
//       <Navbar />
//       <HeroSection />
//       <AINewsSection />
//       <Footer />
//     </main>
//   );
// }
// 'use client';
// import { useSession, signIn, signOut } from 'next-auth/react';

// export default function AuthComponent() {
//   const { data: session } = useSession();
//   console.log(session);
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <div className="btn1 flex justify-center items-center m-5 ">
//         <button onClick={() => signOut()} className='p-5 bg-red-500 cursor-pointer rounded border-2 border-red-600 hover:bg-red-300 hover:font-bold '>Sign out</button>
        

//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <div className="btn1 flex justify-center items-center m-5">
//       <button onClick={() => signIn()} className='p-5 flex justify-center items-center bg-green-500 cursor-pointer rounded border-2 border-green-600 hover:bg-green-300 hover:font-bold '>Sign in</button>
//       </div>
//     </>
//   );
// }

/// app/page.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
      <div className="relative bg-green-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-green-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-green-800 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Discover the power of</span>{' '}
                  <span className="block text-green-400 xl:inline">AYUSH herbs</span>
                </h1>
                <p className="mt-3 text-base text-green-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Identify and learn about Ayurvedic, Yoga & Naturopathy, Unani, Siddha, and Homeopathy herbs using our AI-powered platform.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/identify" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Identify a Plant
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/plants" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      Explore Herbs
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src="/images/hero-image.jpg"
            alt="Various herbal plants"
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Discover the world of AYUSH herbs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform offers a range of features to help you identify, learn about, and connect with AYUSH herbal plants.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'AI-Powered Identification',
                  description: 'Upload an image or use your camera to instantly identify AYUSH herbs.'
                },
                {
                  name: 'Comprehensive Database',
                  description: 'Access detailed information about a wide variety of AYUSH herbal plants.'
                },
                {
                  name: 'Community Forum',
                  description: 'Connect with other herb enthusiasts, share knowledge, and ask questions.'
                },
                {
                  name: 'Personal Herb Collection',
                  description: 'Save and organize your favorite herbs for quick reference.'
                }
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      {/* You can add icons here if desired */}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}