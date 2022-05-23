/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
    NOTION_KEY: process.env.NOTION_KEY
  },
  reactStrictMode: true,
}

module.exports = nextConfig
