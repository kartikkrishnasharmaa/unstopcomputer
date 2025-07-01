// pages/blog/category/[category].js
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const POSTS_PER_PAGE = 8;

export default function CategoryPage({ posts, category, currentPage, totalPages }) {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <NextSeo
        title={`${capitalized} Posts | Unstop Computer Tech`}
        description={`Explore all posts related to ${capitalized}. Read the latest blog posts on ${capitalized} including tips, tutorials, and news.`}
        canonical={`https://unstopcomputer.tech/blog/category/${category}`}
        openGraph={{
          title: `${capitalized} Posts | Unstop Computer Tech`,
          description: `Browse blog articles under the ${capitalized} category.`,
          url: `https://unstopcomputer.tech/blog/category/${category}`,
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { name: 'keywords', content: `${category}, ${capitalized} blog, ${capitalized} tutorials, tech blog` },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
          Posts in "{category}" Category
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white p-5 rounded-xl shadow-md">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={384}
                height={224}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 mt-3 inline-block">
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              href={`/blog/category/${category}?page=${i + 1}`}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-blue-50'
              }`}
            >
              {i + 1}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params, query }) {
  const category = params.category.toLowerCase();
  const page = parseInt(query.page || '1');

  const postsDir = path.join(process.cwd(), 'blog/posts');
  const filenames = fs.readdirSync(postsDir);
  const allPosts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace(/\.md$/, ''),
    };
  });

  const filteredPosts = allPosts.filter(
    (post) => post.category && post.category.toLowerCase() === category
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  return {
    props: {
      posts: paginatedPosts,
      category,
      currentPage: page,
      totalPages,
    },
  };
}