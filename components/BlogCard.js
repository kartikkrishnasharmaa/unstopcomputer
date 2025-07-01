// components/BlogCard.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white ml-4 shadow-md rounded-xl overflow-hidden mb-6 transition-all duration-300"
    >
      <Link href={`/blog/${post.slug}`}>
        <Image height={224} width={384} src={post.coverImage} alt={post.title} className="w-full h-56 object-cover cursor-pointer" />
      </Link>
      <div className="p-4">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold mb-2 text-blue-700 hover:underline cursor-pointer">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 text-xs mb-1">{post.date} | {post.category}</p>
        <p className="text-gray-700 text-sm mb-3">{post.seoDescription}</p>
        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-semibold text-sm">
          Read More
        </Link>
      </div>
    </motion.div>
  );
}