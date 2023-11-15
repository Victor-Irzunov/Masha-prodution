/** @type {import('next').NextConfig} */
const nextConfig = {
	publicRuntimeConfig: {
	  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	},
	images: {
	  domains: ['vi-tech.site'],
	},
 };
 
 module.exports = nextConfig;
 