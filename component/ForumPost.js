
// component/ForumPost.js
export default function ForumPost({ post }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-green-800">{post.author}</span>
          <span className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</span>
        </div>
        <p className="text-gray-700">{post.content}</p>
      </div>
    )
  }