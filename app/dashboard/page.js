'use client' // Make sure to mark it as a client component

import IdeaForm from '@/component/IdeaForm'
import IdeaList from '@/component/PlantCard'
import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return <div>Please sign in to access the dashboard</div>
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Welcome, {session.user.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Recent Ideas Section */}
        <div className="md:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Ideas</h2>
            <IdeaList />
          </div>
        </div>

        {/* Create New Idea Section */}
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create New Idea</h2>
            <IdeaForm onIdeaCreated={() => { /* Refresh idea list */ }} />
          </div>
        </div>
      </div>
    </div>
  )
}
