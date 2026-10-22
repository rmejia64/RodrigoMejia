import { thumb } from "@/content/projects";

/**
 * A screenshot inside a plain window frame: a title bar with the site's
 * domain in OCR-A, then the image. Uses the 800px "-sm" file by default and
 * the 1600px original on wide or high-density screens.
 */
export default function Shot({
	src,
	alt,
	url,
	sizes = "(max-width: 760px) 100vw, 560px",
	eager = false,
}: {
	src: string;
	alt: string;
	url?: string;
	sizes?: string;
	eager?: boolean;
}) {
	const domain = url ? new URL(url).hostname.replace(/^www\./, "") : undefined;
	return (
		<div className="shot">
			<div className="shot-bar" aria-hidden="true">
				<span className="shot-dots">
					<i />
					<i />
					<i />
				</span>
				{domain && <span className="shot-url">{domain}</span>}
			</div>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={thumb(src)}
				srcSet={`${thumb(src)} 800w, ${src} 1600w`}
				sizes={sizes}
				alt={alt}
				width={1600}
				height={1000}
				loading={eager ? "eager" : "lazy"}
				decoding="async"
				fetchPriority={eager ? "high" : undefined}
			/>
		</div>
	);
}
