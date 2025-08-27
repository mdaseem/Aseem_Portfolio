/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aseem-portfolio.vercel.app',
  generateRobotsTxt: true, // Generates robots.txt file
  sitemapSize: 7000,       // Split sitemap if more than 7000 URLs
  outDir: 'public',        // Important: output to public directory for static hosting
};
