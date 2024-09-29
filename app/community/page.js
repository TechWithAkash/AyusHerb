// app/community/page.js
'use client'

import { useState, useEffect } from 'react'
import ForumPost from '@/component/ForumPost'

export default function CommunityPage() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    // Implement API call to fetch posts
    // For now, we'll use dummy data
    setPosts([
      { id: 1, author: 'User1', content: 'Has anyone used Ashwagandha for stress relief?', createdAt: new Date(), likes: 0 },
      { id: 2, author: 'User2', content: 'What are the best practices for plant care?', createdAt: new Date(), likes: 0 },
      { id: 3, author: 'User3', content: 'Can anyone recommend a good herbalist?', createdAt: new Date(), likes: 0 },
    ])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPost.length < 5) {
      setError('Post must be at least 5 characters long.')
      return
    }
    // Implement API call to create a new post
    const newPostObj = { id: posts.length + 1, author: 'CurrentUser', content: newPost, createdAt: new Date(), likes: 0 }
    setPosts([newPostObj, ...posts])
    setNewPost('')
    setError('')
  }

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    )
    setPosts(updatedPosts)
  }

  return (
    <div className="max-w-3xl mt-4 pt-10 mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">Community Forum</h1>
      <form onSubmit={handleSubmit} className="mb-8 border p-4 rounded-lg shadow-md">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts or ask a question..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="4"
          maxLength={250} // Add character limit
        ></textarea>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="mt-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Post
        </button>
      </form>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <ForumPost post={post} onLike={handleLike} />
          </div>
        ))}
      </div>
    </div>
  )
}
