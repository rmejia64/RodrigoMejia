import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Shot from "@/components/Shot";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const p = getProject(slug);
	if (!p) return {};
	return {
		title: p.title,
		description: p.summary,
		alternates: { canonical: `/work/${p.slug}/` },
		openGraph: {
			title: `${p.title} | Rodrigo Mejia`,
			description: p.summary,
			url: `/work/${p.slug}/`,
			...(p.image ? { images: [{ url: p.image.src }] } : {}),
		},
	};
}

export default async function CaseStudy({ params }: Props) {
	const { slug } = await params;
	const p = getProject(slug);
	if (!p) notFound();

	const i = projects.findIndex((x) => x.slug === p.slug);
	const prev = projects[i - 1];
	const next = projects[i + 1];
	// Screenshots we captured are 16:10 and have a small variant; older images keep the plain figure.
	const isShot = p.image?.src.endsWith(".webp") && p.slug !== "bda-cali";

	return (
		<>
			<SiteHeader />
			<main id="main">
				<div className="wrap">
					<header className="case-head">
						<Link className="back" href={p.group === "client" ? "/#clients" : "/#builds"}>
							{p.group === "client" ? "All client work" : "All builds"}
						</Link>
						<h1>{p.title}</h1>
						<p className="case-kind">{p.kind}</p>
						<p className="case-summary">{p.summary}</p>
						{p.site && (
							<div className="actions case-actions">
								<a className="button primary" href={p.site} rel="noopener">
									Visit {new URL(p.site).hostname.replace(/^www\./, "")}
								</a>
							</div>
						)}
						<dl className="facts">
							<div>
								<dt>Role</dt>
								<dd>{p.role}</dd>
							</div>
							<div>
								<dt>When</dt>
								<dd>{p.year}</dd>
							</div>
							{p.status && (
								<div>
									<dt>Status</dt>
									<dd>{p.status}</dd>
								</div>
							)}
							<div>
								<dt>Built with</dt>
								<dd>{p.stack.join(", ")}</dd>
							</div>
							{p.metrics?.map((m) => (
								<div key={m.label}>
									<dt>{m.label}</dt>
									<dd className="fact-number">{m.value}</dd>
								</div>
							))}
							{p.links?.length ? (
								<div>
									<dt>Links</dt>
									<dd>
										{p.links.map((l, n) => (
											<span key={l.href}>
												{n > 0 && <br />}
												<a href={l.href}>{l.label}</a>
											</span>
										))}
									</dd>
								</div>
							) : null}
						</dl>
						{p.image && (
							<figure className="case-image">
								{isShot ? (
									<Shot src={p.image.src} alt={p.image.alt} url={p.site} sizes="(max-width: 1200px) 100vw, 1120px" eager />
								) : (
									<Image
										src={p.image.src}
										alt={p.image.alt}
										width={1800}
										height={954}
										sizes="(max-width: 1200px) 100vw, 1120px"
										priority
									/>
								)}
								{p.image.caption && <figcaption>{p.image.caption}</figcaption>}
								{p.metrics && p.group === "client" && (
									<figcaption>Google PageSpeed Insights mobile scores, October 2026 (out of 100).</figcaption>
								)}
							</figure>
						)}
					</header>

					<div className="case-body">
						{p.sections.map((s) => (
							<section className="case-section" key={s.heading}>
								<h2>{s.heading}</h2>
								<div>
									{s.body?.map((para) => (
										<p key={para}>{para}</p>
									))}
									{s.list && (
										<ul>
											{s.list.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									)}
								</div>
							</section>
						))}
					</div>

					<nav className="pager" aria-label="More work">
						{prev && (
							<Link href={`/work/${prev.slug}/`}>
								<span>Previous</span>
								<strong>{prev.title}</strong>
							</Link>
						)}
						{next && (
							<Link className="next" href={`/work/${next.slug}/`}>
								<span>Next</span>
								<strong>{next.title}</strong>
							</Link>
						)}
					</nav>
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
