// lib/blogData.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blog/posts');

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      ...data
    };
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
