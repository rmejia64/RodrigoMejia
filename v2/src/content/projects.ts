export type Section = {
	heading: string;
	body?: string[];
	list?: string[];
};

export type Project = {
	slug: string;
	group: "client" | "build";
	title: string;
	kind: string;
	/** Short place or industry line for client cards, e.g. "Machine shop, San Carlos". */
	where?: string;
	year: string;
	role: string;
	stack: string[];
	summary: string;
	status?: string;
	/** Live site, shown as the primary link. */
	site?: string;
	/** Screenshot. A "-sm" variant (800px wide) sits next to each full-size file. */
	image?: { src: string; alt: string; caption?: string };
	metrics?: { label: string; value: string }[];
	links?: { label: string; href: string }[];
	sections: Section[];
};

export const thumb = (src: string) => src.replace(/\.webp$/, "-sm.webp");

// Order here is the order on the home page, within each group.
export const projects: Project[] = [
	// ------------------------------------------------------------------
	// Client sites (Peninsula Digital Solutions)
	// ------------------------------------------------------------------
	{
		slug: "bh-machining",
		group: "client",
		title: "B&H Machining",
		kind: "Website for a precision machine shop",
		where: "Machine shop, San Carlos",
		year: "2025 to now",
		role: "Designer, developer and host",
		stack: ["React 19", "React Router", "EmailJS", "reCAPTCHA", "Firebase Hosting", "GitHub Actions", "ffmpeg"],
		summary:
			"A site for a San Carlos shop that has been diamond grinding, core drilling and CNC machining ceramic, quartz, glass and metal parts for more than 40 years. It leads with real footage from the shop floor.",
		site: "https://bh-machining.com",
		image: {
			src: "/images/work/bh-machining.webp",
			alt: "B&H Machining home page: the headline 'From engineering concept to high production' over a video of a diamond grinder throwing sparks",
		},
		sections: [
			{
				heading: "The brief",
				body: [
					"Engineers who buy machined ceramic and quartz want to know two things fast: can this shop make my part, and how do I get a quote. The site answers both on the first screen, with a quote button in the header and a capabilities page that lists the actual equipment.",
				],
			},
			{
				heading: "What I built",
				list: [
					"Home, Capabilities, Quote and Privacy pages in React with React Router, with all copy and the equipment list kept in one data file so updates don't touch layout code.",
					"A quote form that sends through EmailJS, protected by reCAPTCHA, with only public keys in the browser bundle.",
					"Looping machine videos as silent H.264 MP4s with poster frames. A 4-second GIF was 20 to 54 MB; the same clip as MP4 is under 1 MB.",
					"Photos exported at two sizes as WebP with EXIF stripped, since phone photos can carry GPS location.",
					"Preview deploys on every pull request and production deploys on merge, through GitHub Actions and Firebase Hosting.",
				],
			},
		],
	},
	{
		slug: "baywide-moving",
		group: "client",
		title: "Baywide Moving",
		kind: "Website and quote system for a moving company",
		where: "Movers, San Carlos",
		year: "2026",
		role: "Designer and developer",
		stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Firestore", "Cloud Functions", "Resend", "Google Places API", "Playwright"],
		summary:
			"A rebrand launch for a licensed mover that has served the Bay Area since 2003. It shows live Google reviews, takes quote requests, and puts a call button within thumb's reach on every phone screen.",
		site: "https://baywidemoving.com",
		image: {
			src: "/images/work/baywide.webp",
			alt: "Baywide Moving home page: 'Moving the Bay Area since 2003' beside a photo of the crew in front of a moving truck",
		},
		sections: [
			{
				heading: "The brief",
				body: [
					"Trans-One Moving was becoming Baywide Moving. Same crew, same warehouse, new name. The site had to carry the old company's reputation over to the new brand and turn visits into calls and quote requests.",
				],
			},
			{
				heading: "Architecture",
				list: [
					"Next.js static export on Firebase Hosting: plain HTML, no server to maintain.",
					"Google reviews are fetched from the Places API at build time and refreshed weekly by CI, so the API key never reaches the browser.",
					"Quote requests are written to Firestore. Security rules accept only the exact field set with type and length limits, and deny all reads from browsers.",
					"A Cloud Function emails each request to the business through Resend, using the document ID as an idempotency key so a retry never sends a duplicate.",
				],
			},
			{
				heading: "Testing and delivery",
				list: [
					"Unit tests with Vitest, Firestore rules tests against the emulator, and end-to-end tests in Playwright with axe accessibility checks.",
					"One GitHub Actions workflow lints, type-checks, tests, builds and deploys.",
				],
			},
		],
	},
	{
		slug: "jg-home-improvement",
		group: "client",
		title: "JG Home Improvement",
		kind: "Website for a home repair and remodeling contractor",
		where: "Contractor, Bay Area Peninsula",
		year: "2025, redesigned 2026",
		role: "Designer, developer and host",
		stack: ["React 18", "React Router", "Puppeteer", "Python", "Pillow", "Firebase Hosting"],
		summary:
			"A multi-page site for a contractor with more than 15 years on the Peninsula, built to turn visitors into free-consultation calls.",
		site: "https://jghomeimprovementrepair.com",
		image: {
			src: "/images/work/jg-home-improvement.webp",
			alt: "JG Home Improvement home page: 'Quality craftsmanship, personalized service' beside a portrait of the founder holding a hard hat",
		},
		metrics: [
			{ label: "Mobile speed", value: "90" },
			{ label: "SEO", value: "100" },
		],
		sections: [
			{
				heading: "What I built",
				list: [
					"Home, Meet the Founder, Services, Gallery and Contact pages, with click-to-call on every page.",
					"A project gallery fed by a Python script that resizes photos, strips EXIF and writes the gallery data file, so adding a project is one line.",
					"Prerendering with headless Chrome after each build. Search engines and link previews get real HTML, titles and canonical URLs without running JavaScript, and the browser hydrates the same markup.",
				],
			},
			{
				heading: "Result",
				body: [
					"Google PageSpeed Insights scores of 90 for mobile performance and 100 for SEO, measured October 2026.",
				],
			},
		],
	},
	{
		slug: "mz-general-construction",
		group: "client",
		title: "MZ General Construction",
		kind: "Website for a general contractor",
		where: "General contractor, SF Peninsula",
		year: "2026",
		role: "Designer and developer",
		stack: ["Next.js 16", "TypeScript", "CSS Modules", "Firebase Hosting"],
		summary:
			"A one-page site for a licensed general contractor with more than 25 years on the Peninsula: remodels, repairs, additions and ADUs, and exterior work.",
		site: "https://mzgeneralconstruction.com",
		image: {
			src: "/images/work/mz-general.webp",
			alt: "MZ General Construction home page: the MZ logo above a full-width photo of a finished kitchen remodel",
		},
		sections: [
			{
				heading: "What I built",
				list: [
					"A photo-led layout that opens on a finished kitchen and moves through four core services and a gallery of recent projects across Mountain View, Foster City, San Mateo and Palo Alto.",
					"Statically exported Next.js with CSS Modules per component, responsive WebP thumbnails, and Open Graph tags for link previews.",
					"The contractor's license number in the footer, which California requires in contractor advertising.",
				],
			},
		],
	},
	{
		slug: "bears-barber",
		group: "client",
		title: "Bear's Barber",
		kind: "Brand site for a barbershop",
		where: "Barbershop, San Mateo",
		year: "2026",
		role: "Designer and developer",
		stack: ["Next.js 16", "TypeScript", "Firebase Hosting"],
		summary:
			"A brand page for a five-star San Mateo barbershop in its own gold-on-green colors, with booking, services, specialists and directions.",
		site: "https://www.bearsbarber.com",
		image: {
			src: "/images/work/bears-barber.webp",
			alt: "Bear's Barber home page: the gold crown logo and 'Sharp Looks, Sharper Experience' over a photo of the shop",
		},
		metrics: [
			{ label: "Mobile speed", value: "97" },
			{ label: "SEO", value: "100" },
		],
		sections: [
			{
				heading: "What I built",
				list: [
					"Hero, Services, Specialists and Visit Us sections built as separate components, with a Book Your Session button in the header and the hero.",
					"A custom design matched to the shop's gold crown logo and green interior.",
					"Mobile-first layout and static export, which is why it scores 97 for mobile performance on Google PageSpeed.",
				],
			},
		],
	},
	{
		slug: "zaragoza",
		group: "client",
		title: "Zaragoza's Construction",
		kind: "Portfolio site for a custom home builder",
		where: "Custom home builder, Bay Area",
		year: "2024",
		role: "Designer and developer",
		stack: ["Squarespace", "SEO"],
		summary:
			"A portfolio and services site for a full-service custom home builder with more than 20 years in general construction.",
		site: "https://www.zaragozasconstruction.com",
		image: {
			src: "/images/work/zaragoza-2026.webp",
			alt: "Zaragoza's Construction home page: the geometric Z logo and company name over a muted interior photo",
		},
		sections: [
			{
				heading: "What I did",
				list: [
					"Designed the layout around project galleries in Sunnyvale, Santa Clara and Burlingame, plus a commercial tattoo studio build-out in San Francisco.",
					"Built it on Squarespace so the owner can add projects without a developer.",
					"Set up the domain and search indexing so the site shows up for local searches.",
				],
			},
			{
				heading: "Why Squarespace",
				body: [
					"Not every client needs custom code. This owner wanted to post new projects himself, and a hosted builder was the cheaper and more durable choice for him.",
				],
			},
		],
	},
	{
		slug: "raja-chai",
		group: "client",
		title: "Raja Chai Latte",
		kind: "Launch site for a beverage brand",
		where: "Beverage brand, Bay Area",
		year: "2024",
		role: "Designer and developer, contract",
		stack: ["React", "Firebase", "Google Maps API"],
		summary:
			"A launch site for Raja Brands' chai latte with an email sign-up and a store locator built on the Google Maps API.",
		site: "https://drinkraja.com",
		image: {
			src: "/images/work/raja-2026.webp",
			alt: "Raja launch page: a frosted can of Raja chai latte on a black background with the line 'Say hi to a new chai'",
		},
		sections: [
			{
				heading: "The brief",
				body: [
					"Raja Brands needed a page up before launch that matched the can, collected emails for launch news, and told people where to buy.",
				],
			},
			{
				heading: "What I built",
				list: [
					"A responsive React site centered on the can render.",
					"An email sign-up stored in Firebase for marketing campaigns.",
					"A store locator on the Google Maps API.",
					"Custom domain, DNS, analytics and page speed tuning.",
				],
			},
		],
	},

	// ------------------------------------------------------------------
	// Products and engineering
	// ------------------------------------------------------------------
	{
		slug: "swingdoctor",
		group: "build",
		title: "SwingDoctorAI",
		kind: "iOS tennis coach with on-device computer vision",
		year: "2026",
		role: "Solo developer",
		stack: ["Swift", "SwiftUI", "Core ML", "RF-DETR", "Meta Wearables DAT", "Sign in with Apple", "iCloud", "Swift Testing"],
		summary:
			"An iPhone app that watches you play and coaches your technique out loud between swings. Video is analyzed on the phone and never uploaded. Now in beta testing.",
		status: "In beta",
		site: "https://swingdoctorai.com",
		image: {
			src: "/images/work/swingdoctor.webp",
			alt: "SwingDoctorAI landing page: 'Your on-court tennis coach' above an illustration of a tennis court",
		},
		sections: [
			{
				heading: "How it works",
				body: [
					"Prop the phone against the fence, pick Practice or Match, and play. The app finds you, counts your swings, and speaks short tips on stance, turn, contact point and recovery. After the session it writes a report and updates your skill level.",
					"A second mode runs on Meta AI glasses. The camera is on your head, so it sees your opponent instead of you, and the same detectors are read as tactics: where they are, how they swing, and where to hit next.",
				],
			},
			{
				heading: "Vision pipeline",
				list: [
					"Each frame is copied, downscaled and run through a Core ML export of RF-DETR that detects the ball, rackets and people.",
					"A tracking stage keeps identity and motion across frames. If others are on court, raising a hand once tells the app which player is you.",
					"Separate read layers turn the same measurements into self-coaching or tactical statements, so both camera modes share one detector stack.",
					"Thermal, battery and Low Power Mode monitoring throttles the pipeline before the phone does.",
				],
			},
			{
				heading: "Decisions worth noting",
				list: [
					"I replaced an AGPL-licensed YOLO model with Apache-2.0 RF-DETR before launch, so no copyleft code ships in a closed-source app.",
					"I wrote up a freeze-on-toggle bug as a buffer-ownership rule set, so the next camera feature doesn't reintroduce it.",
					"Privacy by default: no account required, no ads, no tracking. Sign in with Apple only turns on iCloud sync of your own history.",
				],
			},
			{
				heading: "Getting the glasses to talk",
				body: [
					"Meta's Wearables Device Access Toolkit is new. The first wall was a session that refused to start with \"Device unavailable\" even though the glasses were paired. The fix was not in the app at all: the developer tools had to be installed on the glasses themselves.",
				],
			},
		],
	},
	{
		slug: "peninsula-digital",
		group: "build",
		title: "Peninsula Digital Solutions",
		kind: "Bilingual web and local marketing studio",
		year: "2026 to now (freelance since 2023)",
		role: "Founder and lead developer",
		stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Resend", "Vercel", "Firebase", "Google Ads"],
		summary:
			"The studio I run for Peninsula small businesses: websites, Google Business Profiles, ads and hosting, in English or Spanish, with one person who picks up the phone.",
		site: "https://peninsuladigitalsolutions.com",
		image: {
			src: "/images/work/peninsula-digital.webp",
			alt: "Peninsula Digital Solutions home page: 'More calls from Google for Peninsula businesses' beside a Google Maps rank grid",
		},
		metrics: [
			{ label: "Mobile speed, own site", value: "98" },
			{ label: "Languages", value: "EN / ES" },
		],
		sections: [
			{
				heading: "What the business does",
				body: [
					"I started building sites for local businesses as a freelancer in December 2023 and formalized the work as Peninsula Digital Solutions LLC in April 2026. My freelance clients moved to the business with me. It's based in North Fair Oaks and serves Redwood City to San Mateo.",
					"Owners get one local person who designs the site, writes the code, sets up hosting, manages the Google listing and ads, and sends a plain-English report every month, in English or Spanish.",
				],
			},
			{
				heading: "Offers",
				list: [
					"A $399 Google Business Profile tune-up: claim and verify the listing, fix categories and hours, bilingual description, a review QR card, and a before-and-after Google Maps rank check at 30 days.",
					"Monthly plans from $349 that bundle the website, hosting, email, booking and Google presence, with ad management in higher tiers.",
				],
			},
			{
				heading: "How I set up client accounts",
				body: [
					"Every client owns their own domain, hosting, Google profile and ad accounts. If a client moves on, nothing is held hostage. It takes longer to set up, but a small business can't afford to lose its web presence.",
				],
			},
			{
				heading: "The tooling",
				list: [
					"The studio site on Next.js and Vercel, with English and Spanish routes and a 98 mobile PageSpeed score.",
					"A client portal in progress on Supabase (Postgres and Auth), Stripe billing that never stores card numbers, and Resend email.",
					"Local-visibility tooling that maps where a business ranks on Google Maps across a grid of nearby points.",
				],
			},
		],
	},
	{
		slug: "squirtzcraft",
		group: "build",
		title: "SquirtzCraft",
		kind: "Self-hosted game server and web control panel",
		year: "2026",
		role: "Builder and admin",
		stack: ["Raspberry Pi 5", "Python", "FastAPI", "Jinja2", "Bash", "systemd", "Cloudflare Tunnel", "nftables", "RCON"],
		summary:
			"A Minecraft server on a Raspberry Pi 5 with a public status page and a full admin dashboard I wrote, published through Cloudflare Tunnel without opening a port.",
		status: "Live",
		site: "https://squirtzcraft.com",
		image: {
			src: "/images/work/squirtzcraft.webp",
			alt: "SquirtzCraft Server Manager dashboard: server running, Minecraft 26.3, Vanilla loader, world ICEMAN, 0 of 5 players online",
		},
		sections: [
			{
				heading: "What it does",
				list: [
					"A public page shows server status, version, world and who's online.",
					"Signed-in admins start, stop and restart the server, watch the live console, switch worlds, loaders (Vanilla, Fabric, Forge) and Minecraft versions, and manage the whitelist and per-world settings.",
					"Backups run on systemd timers with per-world retention, and a cleanup job keeps the Pi's disk from filling with old versions and logs.",
					"A daily update check, with rollback, and protection against loading a world into an older game version.",
				],
			},
			{
				heading: "Architecture",
				body: [
					"A single FastAPI app reads server state directly and runs anything that changes the server through one serverctl command in a background job, so the browser and the command line share exactly the same logic. The browser gets a job ID and streams the output.",
					"Uvicorn listens only on localhost. Cloudflare Tunnel publishes it, nftables locks down the rest, and logins use PBKDF2 hashes with a per-IP lockout after five failed attempts.",
				],
			},
		],
	},
	{
		slug: "bda-cali",
		group: "build",
		title: "BDA Cali donation app",
		kind: "Mobile app for a food bank",
		year: "2022 to 2024",
		role: "Developer on a four-person team",
		stack: ["React Native", "Expo", "Firebase", "Redux Toolkit", "Formik", "React Native Maps"],
		summary:
			"A React Native app that helps Banco de Alimentos Cali, a food bank in Colombia, track donations from request to pickup and assign drivers.",
		image: {
			src: "/images/work/bda-cali.webp",
			alt: "Banco de Alimentos Cali's website, showing a child with a plate of food and a donate button",
			caption: "Banco de Alimentos Cali, the food bank the app was built for.",
		},
		links: [{ label: "Code on GitHub", href: "https://github.com/rmejia64/BDA-Cali-App" }],
		sections: [
			{
				heading: "The problem",
				body: [
					"The food bank needed one place to see incoming donations, send a driver, and know what had been collected, and wanted to automate more of the invoicing that follows.",
					"We built it at Santa Clara University's Frugal Innovation Hub with faculty advisors and the food bank as our client.",
				],
			},
			{
				heading: "What we built",
				list: [
					"A donation pipeline with a screen for each stage: pending, accepted, assigned for pickup and picked up.",
					"Driver assignment from the pending queue, with a driver view of their own pickups and map directions to each one.",
					"Role-based accounts: admins create and manage staff and driver accounts.",
					"English and Spanish language settings.",
				],
			},
		],
	},
];

export const clientWork = projects.filter((p) => p.group === "client");
export const builds = projects.filter((p) => p.group === "build");

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const designs = [
	{
		src: "/images/designs/bill-wilson-center.webp",
		title: "Bill Wilson Center",
		caption: "Concept redesign for a Santa Clara youth services nonprofit, from my website graphic design course.",
	},
	{
		src: "/images/designs/scu-bowling.webp",
		title: "SCU Bowling Club",
		caption: "Concept redesign for Santa Clara University's bowling club.",
	},
	{
		src: "/images/designs/semillas-de-amor.webp",
		title: "Semillas de Amor",
		caption: "Concept redesign for a nonprofit.",
	},
];
