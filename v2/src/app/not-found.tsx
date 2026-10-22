import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
	return (
		<>
			<SiteHeader />
			<main id="main">
				<div className="wrap lost">
					<h1>Page not found</h1>
					<p className="prose">
						This address doesn&rsquo;t match a page on the site. It may have moved when the site was
						rebuilt.
					</p>
					<div className="actions">
						<Link className="button primary" href="/">
							Go to the home page
						</Link>
						<Link className="button" href="/#work">
							See my work
						</Link>
					</div>
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
