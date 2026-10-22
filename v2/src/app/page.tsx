import Link from "next/link";
import Image from "next/image";
import Flock from "@/components/Flock";
import Shot from "@/components/Shot";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { education, jobs, site, skills } from "@/content/site";
import { builds, clientWork } from "@/content/projects";

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: site.name,
	jobTitle: "Full-stack software engineer",
	url: site.url,
	email: `mailto:${site.email}`,
	address: { "@type": "PostalAddress", addressLocality: "Redwood City", addressRegion: "CA", addressCountry: "US" },
	alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
	worksFor: [
		{ "@type": "Organization", name: "Peninsula Digital Solutions LLC", url: site.agency },
		{ "@type": "CollegeOrUniversity", name: "Stanford University Libraries" },
	],
	sameAs: [site.github, site.linkedin, site.agency],
	knowsAbout: ["React", "TypeScript", "Next.js", "Firebase", "Python", "Swift", "Computer vision", "Technical SEO", "Digital preservation"],
};

const when = (start: string, end: string) => (start ? `${start} to ${end}` : end);

export default function Home() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
			<SiteHeader />

			<main id="main">
				<section className="hero">
					<div className="wrap">
						<div className="hero-frame">
							<Flock avoidSelector=".hero-copy h1 span, .hero-lede, .hero-copy .button, .hero-status" />
							<div className="hero-copy">
								<h1>
									<span>Rodrigo</span> <span>Mejia</span>
								</h1>
								<p className="hero-lede">
									Full-stack software engineer in the Bay Area. I build web and iOS apps end to end, and I
									run a studio that ships fast, accessible sites for local businesses.
								</p>
								<div className="actions">
									<a className="button primary" href="#clients">
										See the work
									</a>
									<a className="button" href={site.resume}>
										Download resume
									</a>
								</div>
								<p className="hero-status">{site.lookingFor}</p>
							</div>
						</div>
					</div>
				</section>

				<section className="section" aria-labelledby="now-title">
					<div className="wrap">
						<div className="section-head">
							<h2 id="now-title">Right now</h2>
							<p>Updated October 2026</p>
						</div>
						<div className="now">
							<div className="now-item">
								<h3>Joining Stanford Libraries</h3>
								<p>
									Starting in November as a lab assistant in the Born-Digital Preservation Lab, imaging and
									preserving data from legacy media in the Libraries&rsquo; collections.
								</p>
							</div>
							<div className="now-item">
								<h3>
									<Link href="/work/peninsula-digital/">Running Peninsula Digital</Link>
								</h3>
								<p>
									Seven live client sites, from a San Carlos machine shop to a San Mateo barbershop, plus
									Google listings and ads, in English and Spanish.
								</p>
							</div>
							<div className="now-item">
								<h3>
									<Link href="/work/swingdoctor/">Beta testing SwingDoctorAI</Link>
								</h3>
								<p>An iPhone tennis coach that reads your swing on-device and coaches you out loud.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="section" id="clients" aria-labelledby="clients-title">
					<div className="wrap">
						<div className="section-head">
							<h2 id="clients-title">Client work</h2>
							<p>
								Built through <a href={site.agency}>Peninsula Digital Solutions</a>
							</p>
						</div>
						<p className="section-lede">
							Live sites for Peninsula small businesses. I design them, write the code, host them, and keep
							them running.
						</p>
						<ul className="clients">
							{clientWork.map((p, n) => (
								<li key={p.slug} className={n === 0 ? "client client-lead" : "client"}>
									{p.image && (
										<Shot
											src={p.image.src}
											alt={p.image.alt}
											url={p.site}
											eager={n < 2}
											sizes={n === 0 ? "(max-width: 760px) 100vw, 1120px" : "(max-width: 760px) 100vw, 560px"}
										/>
									)}
									<div className="client-text">
										<h3>
											<Link className="card-link" href={`/work/${p.slug}/`}>
												{p.title}
											</Link>
										</h3>
										<p className="client-where">
											{p.where}, {p.year}
										</p>
										{n === 0 && <p className="client-summary">{p.summary}</p>}
										<p className="client-stack">{p.stack.slice(0, n === 0 ? 6 : 3).join(", ")}</p>
										{p.metrics && (
											<p className="client-metrics">
												{p.metrics.map((m) => (
													<span key={m.label}>
														<strong>{m.value}</strong> {m.label}
													</span>
												))}
											</p>
										)}
										{p.site && (
											<a className="client-visit" href={p.site} rel="noopener">
												Visit site<span className="visually-hidden">: {p.title}</span>
											</a>
										)}
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="section" id="builds" aria-labelledby="builds-title">
					<div className="wrap">
						<div className="section-head">
							<h2 id="builds-title">Builds</h2>
							<p>Products, tools and team projects</p>
						</div>
						<ul className="builds">
							{builds.map((p) => (
								<li key={p.slug} className="build">
									{p.image && <Shot src={p.image.src} alt={p.image.alt} url={p.site} sizes="(max-width: 760px) 100vw, 520px" />}
									<div className="build-text">
										<p className="build-kind">
											{p.kind}
											{p.status && <span className="flag">{p.status}</span>}
										</p>
										<h3>
											<Link className="card-link" href={`/work/${p.slug}/`}>
												{p.title}
											</Link>
										</h3>
										<p>{p.summary}</p>
										<p className="build-stack">{p.stack.slice(0, 6).join(", ")}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="section" id="experience" aria-labelledby="experience-title">
					<div className="wrap">
						<div className="section-head">
							<h2 id="experience-title">Experience</h2>
							<p>
								<a href={site.resume}>Full resume (PDF)</a>
							</p>
						</div>
						<ol className="timeline">
							{jobs.map((job) => (
								<li key={job.org}>
									<time>{when(job.start, job.end)}</time>
									<div>
										<h3>{job.href ? <a href={job.href}>{job.org}</a> : job.org}</h3>
										<p className="role">
											{job.role}, {job.place}
										</p>
										{job.note && <p className="note">{job.note}</p>}
										<ul>
											{job.points.map((pt) => (
												<li key={pt}>{pt}</li>
											))}
										</ul>
									</div>
								</li>
							))}
							<li>
								<time>{when(education.start, education.end)}</time>
								<div>
									<h3>{education.school}</h3>
									<p className="role">{education.degree}</p>
								</div>
							</li>
						</ol>
					</div>
				</section>

				<section className="section" id="about" aria-labelledby="about-title">
					<div className="wrap">
						<div className="section-head">
							<h2 id="about-title">About</h2>
						</div>
						<div className="about">
							<div className="prose">
								<p>
									I studied web design and engineering at Santa Clara University, which means I was trained
									on both sides of the screen: how an interface should feel, and how the system behind it
									should hold up.
								</p>
								<p>
									Since then I&rsquo;ve shipped React and TypeScript features at Study.com, trained NLP
									models at TipNow, and turned freelance work into Peninsula Digital Solutions, a bilingual
									studio where I own every project from the first call to the monthly report. Running it has
									taught me to scope carefully, explain technical trade-offs in plain English and Spanish,
									and keep a site fast years after launch.
								</p>
								<p>
									I also teach. One or two afternoons a week I mentor elementary and middle school students
									in coding with Athena Coding, which is the best test I know of whether I really understand
									something. In November I join Stanford Libraries&rsquo; born-digital preservation lab,
									rescuing data from old disks and drives so it survives the next fifty years.
								</p>
								<p>
									Outside of work I build things to learn them: a tennis coach for the iPhone and Meta&rsquo;s
									smart glasses, and a game server on a Raspberry Pi with its own control panel.
								</p>
								<dl className="skills">
									{skills.map((s) => (
										<div key={s.group} style={{ display: "contents" }}>
											<dt>{s.group}</dt>
											<dd>{s.items.join(", ")}</dd>
										</div>
									))}
								</dl>
							</div>
							<figure>
								<Image
									src="/images/portrait.webp"
									alt="Illustrated portrait of Rodrigo Mejia smiling"
									width={900}
									height={854}
									sizes="(max-width: 760px) 280px, 340px"
								/>
							</figure>
						</div>
					</div>
				</section>

				<section className="contact" aria-labelledby="contact-title">
					<div className="wrap">
						<h2 id="contact-title">Hiring, or have a project in mind?</h2>
						<a className="big-link" href={`mailto:${site.email}`}>
							{site.email}
						</a>
						<div className="actions">
							<a className="button" href={site.linkedin}>
								LinkedIn
							</a>
							<a className="button" href={site.github}>
								GitHub
							</a>
							<a className="button" href={site.agency}>
								Peninsula Digital
							</a>
							<a className="button" href={site.resume}>
								Resume
							</a>
						</div>
					</div>
				</section>
			</main>

			<SiteFooter />
		</>
	);
}
