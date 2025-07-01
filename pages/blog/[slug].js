import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import FeaturedPosts from '../../components/FeaturedPosts';
import { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from 'react-share';
import Image from 'next/image';
import { ClipboardIcon } from '@heroicons/react/24/outline';

export default function BlogPost({ content, meta, featuredPosts, categories }) {
  const [showShare, setShowShare] = useState(false);
  const url = `https://unstopcomputer.tech/blog/${meta.slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      <NextSeo
        title={meta.seoTitle}
        description={meta.seoDescription}
        canonical={`https://unstopcomputer.tech/blog/${meta.slug}`}
        openGraph={{
          title: meta.seoTitle,
          description: meta.seoDescription,
          images: [{ url: meta.coverImage }],
          type: 'article',
        }}
        twitter={{ cardType: 'summary_large_image' }}
        additionalMetaTags={[
          { name: 'keywords', content: meta.keywords },
          { property: 'article:published_time', content: meta.date },
        ]}
      />

      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto px-4 py-10 gap-8">
        {/* Main blog content */}
        <motion.article
          className="lg:w-3/4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={meta.coverImage}
            alt={meta.title}
            className="w-full h-auto object-contain rounded-xl mb-6 shadow-lg"
            width={384}
            height={224}
          />
          <motion.h1
            className="text-4xl font-semibold mb-4 text-gray-900"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {meta.title}
          </motion.h1>

          <div className="text-gray-600 text-sm mb-6 flex justify-between items-center">
            <span>{meta.date} | {meta.category}</span>
            <span className="text-blue-600">{meta.author}</span>
          </div>

          <motion.div
            className="prose max-w-none mb-6 text-gray-800"
            dangerouslySetInnerHTML={{ __html: content }}
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="flex flex-col items-center mt-8 space-y-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
              onClick={() => setShowShare(!showShare)}
            >
              Share This Post
            </button>

            {showShare && (
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <FacebookShareButton url={url}><FacebookIcon size={32} round /></FacebookShareButton>
                <TwitterShareButton url={url}><TwitterIcon size={32} round /></TwitterShareButton>
                <LinkedinShareButton url={url}><LinkedinIcon size={32} round /></LinkedinShareButton>
                <WhatsappShareButton url={url}><WhatsappIcon size={32} round /></WhatsappShareButton>
                <TelegramShareButton url={url}><TelegramIcon size={32} round /></TelegramShareButton>
                <button
                  className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                  onClick={copyToClipboard}
                  title="Copy link"
                >
                  <ClipboardIcon className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.article>

        {/* Sidebar */}
        <motion.aside
          className="lg:w-1/4 w-full mb-6 lg:mb-0 space-y-6"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FeaturedPosts posts={featuredPosts} />

          {/* Category filter */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href={`/blog/category/${category.toLowerCase()}`}
                    className="text-blue-600 hover:underline text-base"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'blog/posts');
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postPath = path.join(process.cwd(), 'blog/posts', `${params.slug}.md`);
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark()
    .use(html) // Ensures proper HTML conversion
    .process(content);
  const contentHtml = processedContent.toString();

  // Fetch all posts to get featured and categories
  const postsDir = path.join(process.cwd(), 'blog/posts');
  const filenames = fs.readdirSync(postsDir);

  const allPosts = filenames.map((name) => {
    const filePath = path.join(postsDir, name);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return { ...data, slug: name.replace(/\.md$/, '') };
  });

  const categories = [...new Set(allPosts.map((post) => post.category).filter(Boolean))];
  const featuredPosts = getRandomPosts(allPosts, 6);

  return {
    props: {
      meta: { ...data, slug: params.slug },
      content: contentHtml,
      featuredPosts,
      categories,
    },
  };
}

function getRandomPosts(posts, count) {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
