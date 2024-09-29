// 'use client'

// import { useState, useEffect } from 'react'
// import { useSession } from 'next-auth/react'
// import { Trash2, ThumbsUp, MessageCircle, AlertCircle } from 'lucide-react'
// import Image from 'next/image'

// const ForumPost = ({ post, onLike, onDelete, currentUser }) => {
//   const [isExpanded, setIsExpanded] = useState(false)

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
//       <div className="flex items-center mb-2">
//         <Image
//           src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`}
//           alt={post.author}
//           width={40}
//           height={40}
//           className="rounded-full mr-2"
//         />
//         <div>
//           <h3 className="font-semibold text-green-800">{post.author}</h3>
//           <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
//         </div>
//       </div>
//       <p className={`text-gray-700 mb-2 ${!isExpanded && 'line-clamp-3'}`}>{post.content}</p>
//       {post.content.length > 150 && (
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-green-600 hover:text-green-800 text-sm mb-2"
//         >
//           {isExpanded ? 'Show less' : 'Show more'}
//         </button>
//       )}
//       <div className="flex items-center justify-between mt-4">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => onLike(post.id)}
//             className="flex items-center text-gray-500 hover:text-green-600"
//           >
//             <ThumbsUp className="w-4 h-4 mr-1" />
//             <span>{post.likes}</span>
//           </button>
//           <div className="flex items-center text-gray-500">
//             <MessageCircle className="w-4 h-4 mr-1" />
//             <span>{post.comments || 0}</span>
//           </div>
//         </div>
//         {currentUser === post.author && (
//           <button
//             onClick={() => onDelete(post.id)}
//             className="text-red-500 hover:text-red-700"
//           >
//             <Trash2 className="w-4 h-4" />
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }

// export default function CommunityPage() {
//   const { data: session } = useSession()
//   const [posts, setPosts] = useState([])
//   const [newPost, setNewPost] = useState('')
//   const [error, setError] = useState('')

//   useEffect(() => {
//     fetchPosts()
//   }, [])
//   const fetchPosts = async () => {
//     // Implement API call to fetch posts
//     // For now, we'll use dummy data
//     setPosts([
//       { id: 1, author: 'User1', content: 'Has anyone used Ashwagandha for stress relief? I\'ve heard great things about its adaptogenic properties and how it can help balance cortisol levels. I\'m considering adding it to my daily routine but would love to hear some first-hand experiences from our community.', createdAt: new Date(), likes: 5, comments: 2 },
  
//       { id: 2, author: 'User2', content: 'What are the best practices for growing and caring for medicinal herbs at home? I\'m particularly interested in starting a small indoor herb garden with plants like holy basil (tulsi), lemon balm, and chamomile. Any tips on soil, light, and watering requirements would be much appreciated!', createdAt: new Date(), likes: 3, comments: 1 },
  
//       { id: 3, author: 'User3', content: 'Can anyone recommend a good Ayurvedic practitioner in the Boston area? I\'m looking for someone experienced in pulse diagnosis and who can provide personalized dosha-balancing recommendations. Bonus points if they also offer panchakarma treatments!', createdAt: new Date(), likes: 7, comments: 4 },
//     ]);
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!session) {
//       setError('You must be logged in to post.')
//       return
//     }
//     if (newPost.length < 5) {
//       setError('Post must be at least 5 characters long.')
//       return
//     }
//     // Implement API call to create a new post
//     const newPostObj = { id: posts.length + 1, author: session.user.name, content: newPost, createdAt: new Date(), likes: 0, comments: 0 }
//     setPosts([newPostObj, ...posts])
//     setNewPost('')
//     setError('')
//   }

//   const handleLike = (postId) => {
//     if (!session) {
//       setError('You must be logged in to like posts.')
//       return
//     }
//     const updatedPosts = posts.map(post =>
//       post.id === postId ? { ...post, likes: post.likes + 1 } : post
//     )
//     setPosts(updatedPosts)
//   }

//   const handleDelete = (postId) => {
//     if (!session) {
//       setError('You must be logged in to delete posts.')
//       return
//     }
//     const updatedPosts = posts.filter(post => post.id !== postId)
//     setPosts(updatedPosts)
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-8 text-green-800 text-center">AYUSH Community Forum</h1>
//       {session ? (
//         <form onSubmit={handleSubmit} className="mb-8 bg-white rounded-lg shadow-md p-4">
//           <textarea
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//             placeholder="Share your thoughts, experiences, or ask a question about AYUSH practices..."
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
//             rows="4"
//             maxLength={500}
//           ></textarea>
//           <div className="flex justify-between items-center mt-2">
//             <span className="text-sm text-gray-500">{500 - newPost.length} characters remaining</span>
//             <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
//               Post
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="mb-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
//           <div className="flex items-center">
//             <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
//             <p className="text-yellow-700">Please log in to participate in the community forum.</p>
//           </div>
//         </div>
//       )}
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <div className="space-y-6">
//         {posts.map((post) => (
//           <ForumPost
//             key={post.id}
//             post={post}
//             onLike={handleLike}
//             onDelete={handleDelete}
//             currentUser={session?.user.name}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Trash2, ThumbsUp, MessageCircle, AlertCircle, User } from 'lucide-react'
import Image from 'next/image'

const ForumPost = ({ post, onLike, onDelete, currentUser }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random&color=fff`

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-2">
        <Image
          src={avatarUrl}
          alt={post.author}
          width={40}
          height={40}
          
          className="rounded-full mr-2"
          dangerouslyAllowSVG={true}
        />
        <div>
          <h3 className="font-semibold text-green-800">{post.author}</h3>
          <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      </div>
      <p className={`text-gray-700 mb-2 ${!isExpanded && 'line-clamp-3'}`}>{post.content}</p>
      {post.content.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-green-600 hover:text-green-800 text-sm mb-2"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onLike(post.id)}
            className="flex items-center text-gray-500 hover:text-green-600"
          >
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span>{post.likes}</span>
          </button>
          <div className="flex items-center text-gray-500">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{post.comments || 0}</span>
          </div>
        </div>
        {currentUser === post.author && (
          <button
            onClick={() => onDelete(post.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export default function CommunityPage() {
  const { data: session } = useSession()
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
      { id: 1, author: 'User1', content: 'Has anyone used Ashwagandha for stress relief? I\'ve heard great things about its adaptogenic properties and how it can help balance cortisol levels. I\'m considering adding it to my daily routine but would love to hear some first-hand experiences from our community.', createdAt: new Date(), likes: 5, comments: 2 },
  
      { id: 2, author: 'User2', content: 'What are the best practices for growing and caring for medicinal herbs at home? I\'m particularly interested in starting a small indoor herb garden with plants like holy basil (tulsi), lemon balm, and chamomile. Any tips on soil, light, and watering requirements would be much appreciated!', createdAt: new Date(), likes: 3, comments: 1 },
  
      { id: 3, author: 'User3', content: 'Can anyone recommend a good Ayurvedic practitioner in the Boston area? I\'m looking for someone experienced in pulse diagnosis and who can provide personalized dosha-balancing recommendations. Bonus points if they also offer panchakarma treatments!', createdAt: new Date(), likes: 7, comments: 4 },
    ]);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!session) {
      setError('You must be logged in to post.')
      return
    }
    if (newPost.length < 5) {
      setError('Post must be at least 5 characters long.')
      return
    }
    // Implement API call to create a new post
    const newPostObj = { id: posts.length + 1, author: session.user.name, content: newPost, createdAt: new Date(), likes: 0, comments: 0 }
    setPosts([newPostObj, ...posts])
    setNewPost('')
    setError('')
  }

  const handleLike = (postId) => {
    if (!session) {
      setError('You must be logged in to like posts.')
      return
    }
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    )
    setPosts(updatedPosts)
  }

  const handleDelete = (postId) => {
    if (!session) {
      setError('You must be logged in to delete posts.')
      return
    }
    const updatedPosts = posts.filter(post => post.id !== postId)
    setPosts(updatedPosts)
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-green-800 text-center">AYUSH Community Forum</h1>
      {session ? (
        <form onSubmit={handleSubmit} className="mb-8 bg-white rounded-lg shadow-md p-4">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts, experiences, or ask a question about AYUSH practices..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            rows="4"
            maxLength={500}
          ></textarea>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">{500 - newPost.length} characters remaining</span>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Post
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
            <p className="text-yellow-700">Please log in to participate in the community forum.</p>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-6">
        {posts.map((post) => (
          <ForumPost
            key={post.id}
            post={post}
            onLike={handleLike}
            onDelete={handleDelete}
            currentUser={session?.user.name}
          />
        ))}
      </div>
    </div>
  )
}