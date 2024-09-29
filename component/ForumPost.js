// component/ForumPost.js
export default function ForumPost({ post, onLike }) {
  return (
    <div>
      <h2 className="font-semibold text-lg">{post.author}</h2>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-sm text-gray-500">{post.createdAt.toLocaleString()}</p>
      <div className="flex justify-between items-center mt-2">
        <button onClick={() => onLike(post.id)} className="text-green-600 hover:text-green-800">
          👍 {post.likes}
        </button>
      </div>
    </div>
  )
}
