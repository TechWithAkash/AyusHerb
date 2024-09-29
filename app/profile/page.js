
// // app/profile/page.js
// 'use client'

// import { useState, useEffect } from 'react'
// import { useSession } from 'next-auth/react'
// import Image from 'next/image'

// export default function ProfilePage() {
//   const { data: session } = useSession()
//   const [userPlants, setUserPlants] = useState([])

//   useEffect(() => {
//     if (session) {
//       // Fetch user's plants
//       fetchUserPlants()
//     }
//   }, [session])

//   const fetchUserPlants = async () => {
//     // Implement API call to fetch user's plants
//     // For now, we'll use dummy data
//     setUserPlants([
//       { id: 1, name: 'Tulsi', scientificName: 'Ocimum sanctum', imageUrl: '/images/tulsi.jpg' },
//       { id: 2, name: 'Ashwagandha', scientificName: 'Withania somnifera', imageUrl: '/images/ashwagandha.jpg' },
//     ])
//   }

//   if (!session) {
//     return <div>Please sign in to view your profile.</div>
//   }

//   return (
//     <div className="max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-green-800">Your Profile</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <div className="flex items-center mb-4">
//           <Image src={session.user.image || '/images/default-avatar.png'} alt="Profile picture" width={80} height={80} className="rounded-full mr-4" />
//           <div>
//             <h2 className="text-2xl font-semibold">{session.user.name}</h2>
//             <p className="text-gray-600">{session.user.email}</p>
//           </div>
//         </div>
//         <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//           Edit Profile
//         </button>
//       </div>
//       <h2 className="text-2xl font-bold mb-4 text-green-800">Your Plants</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {userPlants.map((plant) => (
//           <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <Image src={plant.imageUrl} alt={plant.name} width={400} height={300} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-green-800 mb-1">{plant.name}</h3>
//               <p className="text-sm text-gray-600 italic">{plant.scientificName}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// components/ProfilePage.js
"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: session?.user?.name || '',
    email: session?.user?.email || '',
    bio: '',
    location: '',
    website: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user profile logic goes here
    console.log("Profile updated:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Edit Your Profile</h2>
        <div className="flex items-center mb-6">
          <Image
            src={session?.user?.image || "/images/default-avatar.png"}
            alt="Profile Picture"
            className="rounded-full"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <p className="text-xl font-semibold">{formData.name}</p>
            <p className="text-gray-500">{formData.email}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              placeholder="Tell us something about yourself..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="City, Country"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
