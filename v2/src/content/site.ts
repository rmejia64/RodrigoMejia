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
			"Recover and preserve data from legacy media in the Libraries' collections: floppy and Zip disks, CDs and DVDs, hard drives, flash media and whole computer systems.",
			"Photograph each carrier, create forensic disk images, and analyze the recovered files with purpose-built preservation tools.",
			"Configure and run processing scripts, update accession records, and prepare files for ingest into the Stanford Digital Repository.",
		],
	},
	{
		org: "Peninsula Digital Solutions LLC",
		href: "https://peninsuladigitalsolutions.com",
		role: "Founder and lead developer",
		start: "Dec 2023",
		end: "Present",
		place: "North Fair Oaks, CA",
		note: "Freelance practice from Dec 2023, formalized as a bilingual web and local marketing studio in Sep 2025.",
		points: [
			"Design, build and run websites for Peninsula small businesses, including B&H Machining, Baywide Moving, JG Home Improvement, MZ General Construction, Bear's Barber, Zaragoza's Construction and Raja Brands.",
			"Ship static Next.js and React sites on Firebase Hosting with CI/CD in GitHub Actions, reaching Google PageSpeed mobile scores of 90 to 98.",
			"Built serverless quote pipelines (Firestore, Cloud Functions, Resend), build-time Google Places reviews, and Playwright and axe accessibility tests.",
			"Run Google Business Profiles, local SEO and Google Ads for clients, with monthly reporting in English and Spanish.",
		],
	},
	{
		org: "Athena Coding",
		href: "https://athenacoding.com",
		role: "Coding instructor and mentor",
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
		role: "Software engineering intern",
		start: "May 2025",
		end: "Aug 2025",
		place: "Mountain View, CA",
		points: [
			"Completed 30+ story points of features, bug fixes and enhancements on a cross-functional Agile team.",
			"Built React and TypeScript components for the company design system, documented in Storybook, including new About pages, a progress bar and an admin overwrite tool for database changes.",
			"Fixed critical closed-captioning and course-data bugs, wrote unit and Selenium UI tests, and shipped through Jenkins and Tomcat.",
		],
	},
	{
		org: "FreshFrosh LLC",
		role: "Full-stack web developer",
		start: "Jul 2024",
		end: "Nov 2024",
		place: "Santa Clara, CA",
		points: [
			"Built web interfaces, AI-driven features and the APIs behind a networking and recruiting platform for students.",
			"Built a resume-parsing pipeline and a chatbot, and managed real-time sync, cloud storage and authentication.",
		],
	},
	{
		org: "TipNow Resilience Inc.",
		role: "NLP engineer",
		start: "Mar 2024",
		end: "Aug 2024",
		place: "Fremont, CA",
		points: [
			"Built NLP models that classify anonymous campus-security tips by threat level, reaching 94% accuracy.",
			"Ran the data pipeline, labeling and model evaluation, and led the intern team.",
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
		items: ["TypeScript", "JavaScript", "Python", "Swift", "Java", "C/C++", "SQL", "Bash"],
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
