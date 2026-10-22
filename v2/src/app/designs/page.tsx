import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
	title: "Designs",
	description: "Website design comps and concept redesigns by Rodrigo Mejia.",
	alternates: { canonical: "/designs/" },
};

export default function Designs() {
	return (
		<>
			<SiteHeader current="designs" />
			<main id="main">
				<div className="wrap">
					<header className="case-head">
						<h1>Designs</h1>
						<p className="case-summary">
							Design comps and concept redesigns. Each one starts with type, color and layout decisions
							before any code. Select a design to see it full size.
						</p>
					</header>
					<Gallery />
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
