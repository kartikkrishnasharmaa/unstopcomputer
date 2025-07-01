import Head from "next/head";
import React, { useState } from "react";
import QueLayout from "../../components/QueLayout";
import Link from "next/link";

const WordPressInterviewQuestions = () => {
  const termsData = [
    {
      que: "What is WordPress and its key features?",
      ans: "WordPress is an open-source content management system (CMS) written in PHP that powers over 40% of websites. Key features include: a user-friendly interface, theme system for design customization, plugin architecture for extending functionality, SEO-friendly structure, responsive design support, user management system, and a large community support ecosystem.",
    },
    {
      que: "Explain the difference between WordPress.com and WordPress.org",
      ans: "WordPress.org is the self-hosted version where you download the software and host it yourself, offering full customization and control. WordPress.com is a hosted service that manages hosting for you but with limitations on plugins, themes, and monetization options unless you upgrade to paid plans.",
    },
    {
      que: "What are WordPress hooks and their types?",
      ans: "WordPress hooks allow developers to modify or add functionality without changing core files. There are two types: 1) Action hooks - execute custom code at specific points (using add_action()), 2) Filter hooks - modify data before it's displayed (using add_filter()). Hooks are fundamental to WordPress plugin and theme development.",
    },
    {
      que: "How does the WordPress template hierarchy work?",
      ans: "The template hierarchy is WordPress's system for selecting template files to display content. It follows a specific order: more specific templates override general ones. For example, for a single post: single-{post-type}-{slug}.php > single-{post-type}.php > single.php > singular.php > index.php. This allows theme developers to create targeted templates for different content types.",
    },
    {
      que: "What is the purpose of wp-config.php file?",
      ans: "The wp-config.php file is WordPress's main configuration file containing critical settings: database connection details (name, user, password, host), authentication keys, database table prefix, debugging mode, and other core settings. It's created during installation and should be secured as it contains sensitive information.",
    },
    {
      que: "Explain WordPress custom post types and their uses",
      ans: "Custom post types extend WordPress beyond standard posts and pages, allowing creation of distinct content types (e.g., Products, Portfolios, Testimonials). They're created using register_post_type() and are useful for: organizing different content types, customizing editing interfaces, and enabling unique functionality through custom fields and taxonomies specific to that content type.",
    },
    {
      que: "What are WordPress taxonomies? Explain built-in and custom taxonomies",
      ans: "Taxonomies are classification systems in WordPress. Built-in taxonomies include categories (hierarchical) and tags (non-hierarchical). Custom taxonomies (created with register_taxonomy()) allow grouping content in specialized ways (e.g., 'Genre' for books, 'Location' for events). Taxonomies help organize content and improve site navigation and SEO.",
    },
    {
      que: "How does WordPress handle security? What are best practices?",
      ans: "WordPress security involves: regular updates (core, themes, plugins), strong passwords, limiting login attempts, using security plugins (like Wordfence), implementing SSL, changing default 'admin' username, disabling file editing, proper file permissions, regular backups, and using two-factor authentication. Security is an ongoing process requiring vigilance.",
    },
    {
      que: "Explain the WordPress database structure and key tables",
      ans: "WordPress uses a MySQL database with tables including: wp_users (user data), wp_posts (posts, pages, custom posts), wp_comments (comments), wp_terms (taxonomy terms), wp_term_relationships (post-taxonomy connections), wp_options (settings), wp_postmeta (additional post data), and wp_usermeta (additional user data). The prefix 'wp_' can be customized during installation.",
    },
    {
      que: "What is the WordPress REST API and its uses?",
      ans: "The WordPress REST API provides endpoints to interact with WordPress data via HTTP requests, returning JSON responses. Uses include: creating headless WordPress setups (with front-end frameworks like React), mobile apps, integration with external services, and building custom interfaces. It enables WordPress to serve as a content backend for various applications.",
    },
    {
      que: "How do you optimize WordPress performance?",
      ans: "Performance optimization includes: caching (object, page, browser), image optimization, using a CDN, minimizing plugins, optimizing database, using a fast theme, lazy loading, enabling GZIP compression, HTTP/2, optimizing PHP version, and using a quality hosting provider. Tools like WP Rocket, WP Super Cache, and Autoptimize can help automate optimizations.",
    },
    {
      que: "What are WordPress transients and when to use them?",
      ans: "Transients are a caching mechanism for storing temporary data (with expiration) in the database (or memory with object caching). Use them for: API response caching, complex query results, or any non-critical data that can be temporarily stored. They're set with set_transient(), retrieved with get_transient(), and deleted with delete_transient().",
    },
    {
      que: "Explain the role of .htaccess in WordPress",
      ans: "The .htaccess file is an Apache server configuration file that WordPress uses for: pretty permalinks (URL rewriting), redirects, security protections (like blocking access to sensitive files), caching rules, and other server-level settings. It's automatically updated when permalinks change but can be manually edited for advanced configurations.",
    },
    {
      que: "What is WordPress multisite and when to use it?",
      ans: "Multisite is a WordPress feature allowing multiple sites to share a single installation. Use cases include: managing multiple related sites (like subdomains for departments), client networks, or multilingual sites. Benefits include shared plugins/themes and centralized management, but with considerations for hosting resources and plugin compatibility.",
    },
    {
      que: "How do you create a WordPress child theme and why?",
      ans: "A child theme inherits functionality from a parent theme while allowing customizations. To create one: 1) Make a new directory in /wp-content/themes/, 2) Create style.css with required headers (Template: parent-theme), 3) Add functions.php to enqueue parent styles. Benefits include: safe updates to parent theme, customization preservation, and learning theme development.",
    },
    {
      que: "What are WordPress shortcodes and how to create custom ones?",
      ans: "Shortcodes are WordPress-specific codes (in square brackets) that execute functionality. Create custom ones with add_shortcode(): function my_shortcode($atts, $content = null) { return 'Output'; } add_shortcode('myshortcode', 'my_shortcode');. They allow users to easily add dynamic content without coding knowledge, but should be used judiciously to avoid content lock-in.",
    },
    {
      que: "Explain WordPress user roles and capabilities",
      ans: "WordPress has six default roles: Super Admin (multisite only), Administrator (full access), Editor (content management), Author (own posts), Contributor (write but not publish), and Subscriber (profile management). Capabilities define what each role can do. Custom roles can be created with add_role() and capabilities managed with add_cap() for specialized permission systems.",
    },
    {
      que: "What is the WordPress loop and how does it work?",
      ans: "The loop is PHP code that displays posts. It checks if posts exist with have_posts(), then iterates through them with the_post(), making post data available for display. Basic structure: if (have_posts()) { while (have_posts()) { the_post(); /* display content */ } }. The loop is fundamental to WordPress theme development and can be customized with query parameters.",
    },
    {
      que: "How do you handle WordPress migrations between environments?",
      ans: "Migration methods include: manual (export database, move files), plugins (like Duplicator, All-in-One Migration), or WP-CLI commands. Key steps: 1) Backup both sites, 2) Transfer files (wp-content/uploads especially), 3) Export/import database, 4) Search/replace URLs (tools like Better Search Replace), 5) Test thoroughly. Staging environments help minimize production issues.",
    },
    {
      que: "What are WordPress widgets and how to create custom ones?",
      ans: "Widgets are content blocks added to widget areas (sidebars, footers). Create custom ones by extending WP_Widget class: class My_Widget extends WP_Widget { /* define constructor, form(), update(), widget() methods */ } then register with register_widget(). Widgets provide flexible content management for non-technical users while allowing developers to create reusable components.",
    },
    {
      que: "Explain WordPress cron jobs and how they differ from system cron",
      ans: "WordPress 'pseudo-cron' runs scheduled tasks (like publishing scheduled posts) on page loads, making it unreliable for time-sensitive tasks. System cron (real cron) runs at specified intervals regardless of traffic. For critical tasks, disable WP cron (define('DISABLE_WP_CRON', true);) and set up a system cron to hit wp-cron.php regularly (e.g., every 15 minutes).",
    },
    {
      que: "What is Gutenberg and how does it change WordPress development?",
      ans: "Gutenberg is WordPress's block editor (introduced in 5.0) that replaces the classic editor. It uses React-based blocks for content creation, enabling richer layouts without shortcodes or custom HTML. For developers, it means: creating custom blocks (with JavaScript/React), block patterns, and adapting to this modern editing experience while maintaining backward compatibility.",
    },
    {
      que: "How do you implement caching in WordPress?",
      ans: "Caching implementations include: 1) Page caching (WP Rocket, WP Super Cache), 2) Object caching (Redis, Memcached), 3) Browser caching (via .htaccess), 4) Database caching, 5) CDN caching. Advanced techniques: fragment caching for dynamic elements, HTTP/2 server push, and cache warming. Proper caching strategy depends on site traffic and dynamic content needs.",
    },
    {
      que: "What are WordPress action and filter hooks? Provide examples",
      ans: "Action hooks execute code at specific points: add_action('init', 'my_function') runs during initialization. Filter hooks modify data: apply_filters('the_title', $title) allows title modification. Examples: 'wp_head' (header output), 'save_post' (after saving), 'the_content' (filter post content). Hooks enable extensibility without modifying core files, following the open/closed principle.",
    },
    {
      que: "How do you create a custom WordPress plugin?",
      ans: "To create a plugin: 1) Make a directory in /wp-content/plugins/, 2) Create main PHP file with plugin header (Plugin Name, Version, etc.), 3) Implement functionality using hooks, 4) Include activation/deactivation logic (register_activation_hook()), 5) Add uninstall cleanup if needed. Best practices include: proper documentation, security checks, and following WordPress coding standards.",
    },
    {
      que: "Explain WordPress metadata (post meta, user meta, term meta)",
      ans: "Metadata is additional information associated with posts (post_meta), users (user_meta), or taxonomy terms (term_meta). Stored in respective meta tables, accessed with functions like get_post_meta(), update_user_meta(), add_term_meta(). Used for: custom fields, extended properties, and any supplementary data. Meta queries enable filtering content based on these custom values.",
    },
    {
      que: "What are WordPress nonces and why are they important?",
      ans: "Nonces (number used once) are security tokens that protect URLs and forms from certain types of misuse. Generated with wp_create_nonce(), verified with wp_verify_nonce(). They help prevent: CSRF attacks, unauthorized actions, and URL manipulation. Nonces are time-limited (24h by default) and should be used for all admin-ajax requests, form submissions, and sensitive operations.",
    },
    {
      que: "How do you optimize WordPress database?",
      ans: "Database optimization includes: regular cleanup (revisions, spam comments, transients), optimizing tables (phpMyAdmin or WP-CLI optimize-table), using proper indexes, limiting postmeta joins, removing unused plugins, and scheduling maintenance. Plugins like WP-Optimize can automate tasks. For large sites, consider advanced techniques like sharding or read replicas.",
    },
    {
      que: "What is Object Caching in WordPress and how to implement it?",
      ans: "Object caching stores database query results in memory for faster retrieval. WordPress has a built-in persistent object cache system. Implement by: 1) Installing a drop-in (object-cache.php) for Redis, Memcached, etc., 2) Configuring wp-config.php with server details, 3) Using wp_cache_* functions in code. This dramatically improves performance for high-traffic sites by reducing database load.",
    },
    {
      que: "Explain WordPress Heartbeat API and its impact",
      ans: "The Heartbeat API uses AJAX calls to enable real-time features (auto-saving, session management) by sending periodic requests to the server. While useful, it can cause high server load. Control it with: define('WP_HEARTBEAT_INTERVAL', 60); to reduce frequency, or disable it selectively with wp_deregister_script('heartbeat'). For admin-only: add_filter('heartbeat_settings', function($settings) { $settings['interval'] = 60; return $settings; });",
    },
    {
      que: "How do you implement internationalization (i18n) in WordPress?",
      ans: "WordPress uses gettext for i18n: 1) Wrap strings with __() (return) or _e() (echo), 2) Create .pot file (tools like WP-CLI or Poedit), 3) Translate to .po/.mo files. Load textdomain with load_theme_textdomain() or load_plugin_textdomain(). For complex sites, consider multilingual plugins (WPML, Polylang) or the WordPress Multisite approach with different sites per language.",
    },
    {
      que: "What are WordPress block patterns and how to create them?",
      ans: "Block patterns are predefined block layouts in Gutenberg. Create them by: 1) Registering with register_block_pattern() (or placing HTML files in /patterns/), 2) Using InnerBlocks for dynamic patterns, 3) Providing good titles/categories. Patterns speed up content creation by offering reusable design elements while maintaining editing flexibility. They're more maintainable than shortcodes for complex layouts.",
    },
    {
      que: "How do you debug WordPress issues?",
      ans: "Debugging techniques: 1) Enable WP_DEBUG, SCRIPT_DEBUG, 2) Check error logs, 3) Use Query Monitor plugin, 4) Test with default theme, 5) Disable plugins (troubleshooting mode), 6) Check for PHP/MySQL errors, 7) Use WP-CLI for server-side checks, 8) Implement structured logging. For JavaScript, use browser dev tools. Always debug in staging first.",
    },
    {
      que: "What is the WordPress Customizer API and how to use it?",
      ans: "The Customizer API provides a live-preview interface for theme options. Implement by: 1) Adding panels/sections with $wp_customize->add_panel(), 2) Adding controls (text, color, image, etc.), 3) Defining sanitization callbacks, 4) Outputting values with get_theme_mod(). It's ideal for theme options that benefit from real-time previewing, though some complex sites may prefer dedicated options pages.",
    },
    {
      que: "Explain WordPress rewrite rules and custom endpoints",
      ans: "Rewrite rules convert pretty permalinks to query variables. Add custom rules with add_rewrite_rule() or endpoints with add_rewrite_endpoint(). Flush rules after changes (flush_rewrite_rules()). For complex URL structures, use add_rewrite_tag() and the rewrite API. Always register rules on init hook. This enables custom URL patterns while maintaining WordPress's routing system.",
    },
    {
      que: "How do you implement AJAX in WordPress?",
      ans: "WordPress AJAX uses wp_ajax_(action) and wp_ajax_nopriv_(action) hooks: 1) Localize script with wp_localize_script(), 2) Enqueue script, 3) Handle server-side with wp_ajax_* actions, 4) Use admin-ajax.php endpoint. For REST API alternative: register custom endpoints. Always include nonces for security. Best for: dynamic content loading, form submissions, and interactive elements without page reloads.",
    },
    {
      que: "What are WordPress must-use (MU) plugins and their use cases?",
      ans: "MU plugins (in /wp-content/mu-plugins/) load automatically and can't be deactivated. Use cases: 1) Essential site functionality, 2) Network-wide plugins in multisite, 3) Early-loading code (before regular plugins), 4) Mandatory customizations. Unlike regular plugins, they don't need activation and execute in alphabetical order. Use sparingly as they bypass normal plugin management.",
    },
    {
      que: "How do you optimize images in WordPress?",
      ans: "Image optimization techniques: 1) Use proper formats (WebP, AVIF), 2) Implement lazy loading, 3) Serve responsive images (srcset), 4) Compress with plugins (Smush, ShortPixel), 5) Offload to CDN, 6) Generate multiple sizes (add_image_size()), 7) Clean up unused sizes, 8) Consider client-hints for optimal delivery. Properly sized images significantly improve performance and Core Web Vitals.",
    },
    {
      que: "What is WordPress CLI and its common commands?",
      ans: "WP-CLI is a command-line interface for WordPress. Common commands: wp core (install/update), wp plugin/themes (install/activate), wp db (export/optimize), wp user (create/update), wp media (import/regenerate), wp cron (run/list), wp config (set/get). It enables: batch operations, server management, automation through scripts, and is invaluable for development workflows and maintenance tasks.",
    },
    {
      que: "How do you implement custom fields in WordPress?",
      ans: "Custom field approaches: 1) Native post meta with add_post_meta() - simple but unstructured, 2) Advanced Custom Fields (ACF) plugin - user-friendly UI, 3) Custom meta boxes - full control but more code, 4) Gutenberg block attributes - modern editor integration. Choose based on: content structure needs, editorial requirements, and technical constraints. Always sanitize/validate input.",
    },
    {
      que: "Explain WordPress multisite network administration",
      ans: "Multisite networks have: 1) Super Admins with network-wide access, 2) Shared plugins/themes (network-activated), 3) User management across sites, 4) Shared uploads (with site-specific directories), 5) Network admin dashboard. Considerations: domain mapping, large network performance, specialized hosting needs. Useful for: related sites, client management platforms, or organizations with multiple departments.",
    },
    {
      que: "What are WordPress template tags and how do they work?",
      ans: "Template tags are PHP functions that retrieve/display WordPress content (the_title(), the_content(), etc.). They're used in theme files to output dynamic data. Most: 1) Echo content by default, 2) Have 'get_' versions (get_the_title()) that return values, 3) Accept parameters for customization. They abstract database queries and follow WordPress standards for security and performance.",
    },
    {
      que: "How do you implement eCommerce in WordPress?",
      ans: "eCommerce solutions: 1) WooCommerce (most popular, extendable), 2) Easy Digital Downloads (digital goods), 3) Custom solutions (using custom post types/payment gateways). Key considerations: payment processing, product management, tax/shipping, performance under load, security (PCI compliance), and integration with marketing tools. Always use reputable plugins and follow security best practices.",
    },
    {
      que: "What are WordPress best practices for theme development?",
      ans: "Theme development best practices: 1) Use child themes, 2) Follow coding standards, 3) Implement proper template hierarchy, 4) Make responsive/mobile-first, 5) Optimize performance, 6) Include accessibility features, 7) Secure all outputs (escaping/sanitization), 8) Provide customization options, 9) Document code, 10) Test across environments. Modern themes should support: block editor, wide/full alignment, and theme.json for global styles.",
    },
    {
      que: "How do you handle WordPress backups?",
      ans: "Backup strategy should include: 1) Regular automated backups (plugins like UpdraftPlus), 2) Off-site storage (cloud services), 3) Database and files (especially wp-content), 4) Versioned backups, 5) Test restoration process, 6) Pre-update backups. For large sites: incremental backups, database optimization before backup, and consider managed hosting with built-in backups. Never rely solely on host backups.",
    },
    {
      que: "What is headless WordPress and its pros/cons?",
      ans: "Headless WordPress uses WordPress as a backend (via REST API or GraphQL) with a separate frontend (React, Vue, etc.). Pros: modern frontend tech, better performance, flexible displays. Cons: loses some WP features (previews, plugins), requires more development, SEO challenges. Implementation options: fully decoupled, progressively decoupled, or using frameworks like Frontity. Best for: complex applications needing WP's CMS with custom frontends.",
    },
    {
      que: "How do you implement search functionality in WordPress?",
      ans: "Search implementation options: 1) Native WP search (simple but limited), 2) Plugins (Relevanssi, SearchWP), 3) Custom WP_Query solutions, 4) External services (Algolia, Elasticsearch). For better performance: index content, implement AJAX live search, consider taxonomy weighting, and for large sites, use dedicated search servers. Always test search result relevance and speed.",
    },
    {
      que: "What are WordPress coding standards and why follow them?",
      ans: "WordPress coding standards (PHP, JS, CSS) ensure: consistency, readability, security, and compatibility. Key aspects: proper indentation, brace styles, naming conventions, documentation, sanitization/escaping. Tools: PHP_CodeSniffer with WordPress rulesets, ESLint for JavaScript. Following standards is essential for: core contributions, public plugins/themes, team collaboration, and maintainable code.",
    },
  ];

  const pageTitle =
    "Top 50 WordPress Developer Interview Questions & Answers (2025) | Unstop Computer";
  const pageDescription =
    "Comprehensive collection of WordPress interview questions with detailed answers. Prepare for your WordPress developer job interview with these essential questions on themes, plugins, security, performance, and more.";
  const canonicalUrl =
    "https://unstopcomputer.tech/interview-question/wordpress";
  const pageImage = "https://unstopcomputer.tech/Images/logo.png";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#317EFB" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="WordPress interview questions, WordPress developer interview, WordPress technical questions, WordPress job interview, WordPress coding interview, WordPress plugin development, WordPress theme development, WordPress security questions, WordPress performance optimization, CMS interview questions"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:alt" content="Unstop Computer Logo" />
        <meta property="og:site_name" content="Unstop Computer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:alt" content="Unstop Computer Logo" />

        {/* Favicons */}
        <link rel="icon" href="/Images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/Images/apple-touch-icon.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: termsData.map((term, index) => ({
              "@type": "Question",
              name: term.que,
              acceptedAnswer: {
                "@type": "Answer",
                text: term.ans,
              },
            })),
          })}
        </script>
      </Head>

      <QueLayout>
        <section id="content-wrapper" className="">
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex mb-6" aria-label="Breadcrumb">
              <div className="inline-flex items-center space-x-1 md:space-x-3">
                <div className="inline-flex items-center">
                  <Link href="/" className="text-blue-900 hover:text-blue-800">
                    Home
                  </Link>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                      href="/interview-question"
                      className="text-blue-900 hover:text-blue-800"
                    >
                      Interview Questions
                    </Link>
                  </div>
                </div>
                <div aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-blue-900">WordPress Developer</span>
                  </div>
                </div>
              </div>
            </nav>

            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                WordPress Developer Interview Questions and Answers
              </h1>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Comprehensive collection of frequently asked WordPress interview
                questions with detailed answers. Prepare for your technical
                interview with these essential questions on themes, plugins,
                security, performance, and more.
              </p>
            </div>

            {/* Content Stats */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 border-r border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {termsData.length}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Questions
                  </div>
                </div>
                <div className="p-4 border-r border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    2025
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Updated
                  </div>
                </div>
                <div className="p-4 border-r border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Beginner to Advanced
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Levels</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    100%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Practical Answers
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {termsData.map((term, index) => (
                  <a
                    key={index}
                    href={`#q${index + 1}`}
                    className="text-blue-600 hover:text-white dark:text-blue-400 hover:underline"
                  >
                    {index + 1}. {term.que}
                  </a>
                ))}
              </div>
            </div>

            {/* Questions Section */}
            <div className="space-y-6">
              {termsData.map((term, index) => (
                <div
                  key={index}
                  id={`q${index + 1}`}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                          {term.que}
                        </h3>
                        <div className="prose dark:prose-dark max-w-none">
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              Answer:
                            </span>{" "}
                            {term.ans}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready for Your Technical Interview ?

              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Practice these questions thoroughly and boost your confidence
                for the interview. Bookmark this page for future reference and
                share with fellow developers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/interview-question"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  More Interview Questions
                </a>
              </div>
            </div>
          </div>
        </section>
      </QueLayout>
    </>
  );
};

export default WordPressInterviewQuestions;