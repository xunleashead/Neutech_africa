/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://neutechafrica.xyz',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}