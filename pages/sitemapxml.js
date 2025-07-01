import fs from 'fs';

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = fs.readFileSync('./public/sitemap.xml', 'utf8');
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}
