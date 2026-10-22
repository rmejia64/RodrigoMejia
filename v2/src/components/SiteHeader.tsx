"use client";

import Link from "next/link";
import { site } from "@/content/site";

const nav = [
	{ href: "/#clients", label: "Client work" },
	{ href: "/#builds", label: "Builds" },
	{ href: "/#experience", label: "Experience" },
	{ href: "/#about", label: "About" },
	{ href: "/designs/", label: "Designs", key: "designs" as const },
];

export default function SiteHeader({ current }: { current?: "designs" }) {
	return (
		<header className="site-header">
			<div className="wrap">
				<Link href="/" className="wordmark">
					Rodrigo Mejia
				</Link>

				{/* Desktop: inline links. */}
				<nav className="nav" aria-label="Main">
					{nav.map((n) => (
						<Link key={n.href} href={n.href} aria-current={n.key && n.key === current ? "page" : undefined}>
							{n.label}
						</Link>
					))}
					<a className="nav-cta" href={site.resume}>
						Resume
					</a>
				</nav>

				{/* Phones: a disclosure menu. <details> needs no JavaScript and is keyboard accessible. */}
				<details className="menu">
					<summary aria-label="Open menu">Menu</summary>
					<nav
						className="menu-panel"
						aria-label="Main (mobile)"
						onClick={(e) => {
							// Close the menu after a jump link so the page section is visible.
							if ((e.target as HTMLElement).closest("a")) e.currentTarget.closest("details")?.removeAttribute("open");
						}}
					>
						{nav.map((n) => (
							<Link key={n.href} href={n.href} aria-current={n.key && n.key === current ? "page" : undefined}>
								{n.label}
							</Link>
						))}
						<a href={site.resume}>Resume (PDF)</a>
						<a href={`mailto:${site.email}`}>{site.email}</a>
					</nav>
				</details>
			</div>
		</header>
	);
}
