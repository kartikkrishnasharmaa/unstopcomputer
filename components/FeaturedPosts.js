import Image from 'next/image';

function getRandomPosts(posts, count) {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function FeaturedPosts({ posts }) {
  const featured = getRandomPosts(posts, 6);
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Featured Posts</h3>
      <div className="space-y-4">
        {featured.map((post) => (
          <div key={post.slug} className="flex items-center space-x-4">
            {/* Featured Post Thumbnail */}
            {post.coverImage && (
              <Image
                width={64}
                height={64}
                src={post.coverImage}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-md"
              />
            )}
            <div>
              <a
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {post.title}
              </a>
              <div className="text-sm text-gray-500">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
