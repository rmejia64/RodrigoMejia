import { site } from "@/content/site";

export default function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="wrap">
				<p>
					© {new Date().getFullYear()} {site.name}. Set in OCR-A and Atkinson Hyperlegible, two typefaces
					designed to be read.
				</p>
				<p>
					<a href={site.github}>GitHub</a> &nbsp; <a href={site.linkedin}>LinkedIn</a> &nbsp;{" "}
					<a href={site.agency}>Peninsula Digital Solutions</a> &nbsp;{" "}
					<a href={`mailto:${site.email}`}>{site.email}</a>
				</p>
			</div>
		</footer>
	);
}
