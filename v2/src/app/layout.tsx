import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";

// Self-hosted and preloaded by Next.js, with a size-matched fallback so the
// page doesn't jump when the fonts arrive.
const text = localFont({
	src: [
		{ path: "../fonts/atkinson-hyperlegible-next-latin-400-normal.woff2", weight: "400", style: "normal" },
		{ path: "../fonts/atkinson-hyperlegible-next-latin-700-normal.woff2", weight: "700", style: "normal" },
	],
	variable: "--font-text",
	display: "swap",
});

const mono = localFont({
	src: "../fonts/atkinson-hyperlegible-mono-latin-400-normal.woff2",
	variable: "--font-mono",
	display: "swap",
	adjustFontFallback: false,
	fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: `${site.name} | Full-stack software engineer`,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	authors: [{ name: site.name, url: site.url }],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: site.url,
		siteName: site.name,
		title: `${site.name} | Full-stack software engineer`,
		description: site.description,
		images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rodrigo Mejia, full-stack software engineer" }],
	},
	twitter: {
		card: "summary_large_image",
		title: `${site.name} | Full-stack software engineer`,
		description: site.description,
		images: ["/og.png"],
	},
	icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#eef4fa" },
		{ media: "(prefers-color-scheme: dark)", color: "#0b1622" },
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${text.variable} ${mono.variable}`}>
			<head>
				{/* OCR-A from Rodrigo's Adobe Fonts kit. Falls back to Atkinson Hyperlegible Mono. */}
				<link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://use.typekit.net/agq7tel.css" />
			</head>
			<body>
				<a className="skip" href="#main">
					Skip to content
				</a>
				{children}
			</body>
		</html>
	);
}
