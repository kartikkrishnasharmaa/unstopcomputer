
// pages/blog/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { getAllPosts } from '../../lib/blogData';
import BlogCard from '../../components/BlogCard';
import Pagination from '../../components/Pagination';
import CategoryFilter from '../../components/CategoryFilter';
import FeaturedPosts from '../../components/FeaturedPosts';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('All');
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filtered = category === 'All' ? posts : posts.filter(p => p.category === category);
  const paginated = filtered.slice((page - 1) * 8, page * 8);
  const totalPages = Math.ceil(filtered.length / 8);

  return (
    <>
      <NextSeo
        title="Blogs | Unstop Computer"
        description="Read latest Computer Science blogs, interview tips, and MCQs at Unstop Computer."
        canonical="https://unstopcomputer.tech/blog"
        openGraph={{
          url: 'https://unstopcomputer.tech/blog',
          title: 'Blogs | Unstop Computer',
          description: 'Latest Computer Science blogs, interview tips, and MCQs.',
          site_name: 'Unstop Computer',
        }}
        twitter={{
          handle: '@unstopcomputer',
          site: '@unstopcomputer',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'computer science blogs, interview prep, mcqs, coding blogs'
        }]}
        additionalLinkTags={[{
          rel: 'icon',
          href: '/favicon.ico'
        }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <CategoryFilter setCategory={setCategory} selectedCategory={category} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {paginated.map(post => <BlogCard key={post.slug} post={post} />)}
          </div>
          <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
          {screenWidth && screenWidth < 768 && (
            <div className="mt-10">
              <FeaturedPosts posts={posts} />
            </div>
          )}
        </div>
        {screenWidth && screenWidth >= 768 && (
          <div>
            <FeaturedPosts posts={posts} />
          </div>
        )}
      </div>
    </>
  );
}
