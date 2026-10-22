import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML to ./out, which Firebase
// Hosting serves as-is. No server needed.
const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	images: { unoptimized: true },
	turbopack: {
		root: __dirname,
	},
};

export default nextConfig;
