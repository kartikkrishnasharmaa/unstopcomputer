import Head from "next/head";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Compiler from "../components/compiler";
import Mcq from "../components/Mcq";

export default function Home() {
  const siteUrl = "https://unstopcomputer.tech";
  const siteName = "Unstop Computer";
  const siteDescription =
    "Learn coding online with free tutorials, practice examples, and interactive coding exercises. Master programming from basic to advanced concepts.";
  const logoUrl = `${siteUrl}/Images/logo.png`;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          {siteName} | Learn Coding Online with Free Programming Tutorials
        </title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#317EFB" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          name="Keywords"
          content="programming, coding, learn to code, web development, computer science, free coding tutorials, HTML, CSS, JavaScript, Python, Java, C++, React, Node.js, SQL, programming exercises, coding examples, computer programming basics"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:title"
          content={`${siteName} | Learn Coding Online with Free Programming Tutorials`}
        />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:image:alt" content={`${siteName} Logo`} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${siteName} | Learn Coding Online with Free Programming Tutorials`}
        />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={logoUrl} />
        <meta name="twitter:image:alt" content={`${siteName} Logo`} />

        {/* Favicons */}
        <link rel="icon" href="/Images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/Images/apple-touch-icon.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: siteUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>

      {/* Content */}
      <Hero />
      <Feature />

      <h1 className="sr-only">Learn Programming with {siteName}</h1>
      <Mcq />
      <Compiler />
    </>
  );
}
