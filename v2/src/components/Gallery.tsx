"use client";

import { useRef, useState } from "react";
import { designs } from "@/content/projects";

export default function Gallery() {
	const dialog = useRef<HTMLDialogElement>(null);
	const [open, setOpen] = useState<(typeof designs)[number] | null>(null);

	const show = (d: (typeof designs)[number]) => {
		setOpen(d);
		dialog.current?.showModal();
	};

	return (
		<>
			<div className="gallery">
				{designs.map((d, n) => (
					<figure key={d.src} style={{ margin: 0 }}>
						<button type="button" onClick={() => show(d)} aria-label={`View ${d.title} full size`}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={d.src.replace(".webp", "-sm.webp")} alt={`${d.title} design`} loading={n < 2 ? "eager" : "lazy"} fetchPriority={n === 0 ? "high" : undefined} width={840} height={560} />
						</button>
						<h2>{d.title}</h2>
						<p>{d.caption}</p>
					</figure>
				))}
			</div>

			<dialog
				ref={dialog}
				className="lightbox"
				onClose={() => setOpen(null)}
				onClick={(e) => {
					if (e.target === dialog.current) dialog.current?.close();
				}}
				aria-label={open ? `${open.title} full size` : "Design"}
			>
				{open && (
					<>
						<form method="dialog">
							<span>{open.title}</span>
							<button className="button" type="submit" autoFocus>
								Close
							</button>
						</form>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={open.src} alt={`${open.title} design, full size`} />
					</>
				)}
			</dialog>
		</>
	);
}
