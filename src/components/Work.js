import "../styles/Work.css";

const jobs = [
	{
		org: "Peninsula Digital Solutions",
		role: "Founder & Lead Developer",
		dates: "Dec 2023 – Present",
		note: "Freelance practice from Dec 2023, formalized as an agency in Sep 2025",
		points: [
			"Design, build, and maintain websites for small-business clients including JG Home Improvement, Raja Brands, Zepeda Dog Services, and Zaragoza's Construction.",
			"Architecting a custom client portal on Next.js, Supabase, Stripe, and Resend, deployed on Vercel.",
			"Handle DNS, hosting, technical SEO, Google Business Profiles, and Google Ads for clients.",
		],
	},
	{
		org: "Study.com",
		role: "Software Engineering Intern",
		dates: "May 2025 – Aug 2025",
		points: [
			"Completed 30+ story points on a cross-functional Agile team.",
			"Built React/TypeScript design-system components documented in Storybook.",
			"Fixed critical closed-captioning and course-data bugs; shipped via Jenkins and Tomcat.",
		],
	},
	{
		org: "FreshFrosh LLC",
		role: "Full-Stack Web Developer",
		dates: "Jul 2024 – Nov 2024",
		points: [
			"Built web interfaces, AI-driven features, and APIs for a networking and recruiting platform.",
			"Built a resume-data pipeline; managed real-time sync, storage, and auth.",
		],
	},
	{
		org: "TipNow Resilience Inc.",
		role: "NLP Engineer",
		dates: "Mar 2024 – Jul 2024",
		points: [
			"Built NLP models that classify anonymous campus-security tips by threat level, reaching 94% accuracy.",
			"Led the intern team's data pipeline, labeling, and model evaluation work.",
		],
	},
];

function Work() {
	return (
		<div className="Work_Section">
			<p className="Work_Header">Experience</p>
			<div className="Work_Container">
				{jobs.map((job) => (
					<div className="Work_Item" key={job.org}>
						<div className="Work_Top">
							<p className="Work_Org">{job.org}</p>
							<p className="Work_Dates">{job.dates}</p>
						</div>
						<p className="Work_Role">{job.role}</p>
						{job.note && <p className="Work_Note">{job.note}</p>}
						<ul className="Work_Points">
							{job.points.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</div>
				))}
				<div className="Work_Item">
					<div className="Work_Top">
						<p className="Work_Org">Santa Clara University</p>
						<p className="Work_Dates">2018 – 2023</p>
					</div>
					<p className="Work_Role">B.S., Web Design and Engineering</p>
				</div>
			</div>
		</div>
	);
}

export default Work;
