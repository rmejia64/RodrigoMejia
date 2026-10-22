export const site = {
	name: "Rodrigo Mejia",
	title: "Full-stack software engineer",
	url: "https://rodrigomejia.com",
	email: "hire@rodrigomejia.com",
	location: "Redwood City, CA",
	resume: "/Rodrigo_Mejia_CV.pdf",
	github: "https://github.com/rmejia64",
	linkedin: "https://www.linkedin.com/in/rmejia36",
	agency: "https://peninsuladigitalsolutions.com",
	description:
		"Rodrigo Mejia is a full-stack software engineer in the San Francisco Bay Area. He founded Peninsula Digital Solutions, builds iOS computer vision for tennis, and joins Stanford Libraries' born-digital preservation lab in November 2026.",
	lookingFor:
		"Open to full-stack and front-end engineering roles in the Bay Area or remote.",
};

export type Job = {
	org: string;
	href?: string;
	role: string;
	start: string;
	end: string;
	place: string;
	note?: string;
	points: string[];
};

export const jobs: Job[] = [
	{
		org: "Stanford University Libraries",
		href: "https://library.stanford.edu/digitization",
		role: "Lab assistant, Born-Digital and Media Preservation",
		start: "Nov 2026",
		end: "Present",
		place: "Redwood City, CA",
		note: "Part-time role in the Born-Digital Preservation Lab, starting November 2026.",
		points: [
			"Recover data from legacy media in the Libraries' collections: create forensic disk images, analyze files with preservation tools, run processing scripts, and prepare collections for ingest into the Stanford Digital Repository.",
		],
	},
	{
		org: "Peninsula Digital Solutions LLC",
		href: "https://peninsuladigitalsolutions.com",
		role: "Founder and lead developer",
		start: "Apr 2026",
		end: "Present",
		place: "Redwood City, CA",
		note: "Formalized my freelance web practice (Dec 2023 to Mar 2026) as a bilingual web and local marketing studio; my freelance clients moved to the business.",
		points: [
			"Build, host and maintain websites for seven Peninsula small businesses, including B&H Machining, Baywide Moving, JG Home Improvement, MZ General Construction, Bear's Barber and Zaragoza's Construction.",
			"Ship static Next.js and React sites on Firebase Hosting with CI/CD in GitHub Actions, reaching Google PageSpeed mobile scores of 90 to 97.",
			"Built a serverless lead pipeline (Firestore security rules, Cloud Functions, Resend with idempotency keys) tested end to end with Playwright and axe.",
			"Building a client portal on Next.js, Supabase, Stripe and Vercel; run local SEO, Google Business Profiles and Google Ads (MCC) with reporting in English and Spanish.",
		],
	},
	{
		org: "Athena Coding",
		href: "https://athenacoding.com",
		role: "Coding instructor and mentor (part-time)",
		start: "",
		end: "Present",
		place: "Bay Area, CA",
		points: [
			"Teach and mentor elementary and middle school students in after-school coding lessons, one to two days a week.",
			"Turn programming ideas into hands-on projects students can finish and show off, and adapt each lesson to a mixed-grade room.",
		],
	},
	{
		org: "Study.com",
		role: "Software engineering intern (full stack)",
		start: "May 2025",
		end: "Aug 2025",
		place: "Mountain View, CA",
		points: [
			"Delivered 30+ story points on a cross-functional Agile team: reusable React and TypeScript components in Storybook, a PDF download feature, and Everflow conversion tracking.",
			"Restored closed captioning after breaking third-party API changes and fixed course-count data at the source; wrote unit and Selenium tests and shipped with Jenkins and Tomcat.",
		],
	},
	{
		org: "FreshFrosh LLC",
		role: "Full-stack developer intern",
		start: "Jul 2024",
		end: "Nov 2024",
		place: "Santa Clara, CA",
		points: [
			"Built the web interface and Node.js APIs for a platform connecting students with peers and mentors, plus an AI resume parser and chatbot, on Firebase real-time data, storage and auth.",
		],
	},
	{
		org: "TipNow Resilience Inc.",
		role: "NLP engineer intern",
		start: "Mar 2024",
		end: "Aug 2024",
		place: "Fremont, CA",
		points: [
			"Led a small intern team building Python NLP models that assign threat levels to anonymous campus-security tips, reaching 94% accuracy; designed the ingestion pipeline and oversaw labeling and evaluation.",
		],
	},
	{
		org: "Raja Brands LLC",
		href: "https://drinkraja.com",
		role: "Web developer (contract)",
		start: "Dec 2023",
		end: "Aug 2024",
		place: "San Francisco Bay Area",
		points: [
			"Designed and built the responsive launch site for a chai latte brand in React and Firebase, with an email sign-up for marketing campaigns, a Google Maps API store locator, SEO and analytics.",
		],
	},
];

export const education = {
	school: "Santa Clara University",
	degree: "B.S., Web Design and Engineering",
	start: "2018",
	end: "2023",
};

export const skills: { group: string; items: string[] }[] = [
	{
		group: "Languages",
		items: ["TypeScript", "JavaScript", "Python", "Swift", "Java", "SQL", "C/C++", "Bash"],
	},
	{
		group: "Front end",
		items: ["React", "Next.js", "SwiftUI", "React Native", "Tailwind CSS", "Storybook"],
	},
	{
		group: "Back end and data",
		items: ["Node.js", "FastAPI", "Flask", "Firebase", "Firestore", "Supabase", "Postgres", "Stripe", "Resend"],
	},
	{
		group: "Cloud and ops",
		items: ["Firebase Hosting", "Cloud Functions", "Vercel", "GitHub Actions", "Cloudflare Tunnel", "systemd", "Linux"],
	},
	{
		group: "Testing",
		items: ["Playwright", "axe-core", "Vitest", "Swift Testing", "Selenium"],
	},
	{
		group: "ML and vision",
		items: ["Core ML", "RF-DETR", "OpenCV", "PyTorch", "scikit-learn", "NLTK"],
	},
	{
		group: "Web growth",
		items: ["Technical SEO", "Search Console", "Google Business Profile", "Google Ads", "PageSpeed"],
	},
];
