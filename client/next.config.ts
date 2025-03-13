import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "/a/**",
			},
			{
				protocol: "https",
				hostname: "imgur.com",
				pathname: "/a/**",
			},
		],
		domains: [
			"plus.unsplash.com",
			"res.cloudinary.com"
		],
	},
};

export default nextConfig;
