import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();
	return [
		{ url: `${site.url}/`, lastModified: now, priority: 1 },
		{ url: `${site.url}/designs/`, lastModified: now, priority: 0.5 },
		...projects.map((p) => ({ url: `${site.url}/work/${p.slug}/`, lastModified: now, priority: 0.8 })),
	];
}
