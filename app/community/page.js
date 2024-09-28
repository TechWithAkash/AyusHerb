// app/community/page.js
'use client'

import { useState, useEffect } from 'react'
import ForumPost from '@/component/ForumPost'

export default function CommunityPage() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  useEffect(() => {
    // Fetch posts from API
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    // Implement API call to fetch posts
    // For now, we'll use dummy data
    setPosts([
      { id: 1, author: 'User1', content: 'Has anyone used Ashwagandha for stress relief?', createdAt: new Date() },
      { id: 2, author: 'User2', content: 'Has anyone used Ashwagandha for stress relief?', createdAt: new Date() },
      { id: 2, author: 'User3', content: 'Has anyone used Ashwagandha for stress relief?', createdAt: new Date() },
      
    ])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Implement API call to create new post
    // For now, we'll just add it to the local state
    const newPostObj = { id: posts.length + 1, author: 'CurrentUser', content: newPost, createdAt: new Date() }
    setPosts([newPostObj, ...posts])
    setNewPost('')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Community Forum</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts or ask a question..."
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
        ></textarea>
        <button type="submit" className="mt-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Post
        </button>
      </form>
      <div className="space-y-6">
        {posts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}