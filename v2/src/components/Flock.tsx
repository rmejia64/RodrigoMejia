"use client";

import { useEffect, useRef } from "react";

/*
 * A port of the p5 sketch from the original rodrigomejia.com, rewritten on a
 * plain 2D canvas so the page doesn't ship the 1 MB p5 library.
 *
 * - Dots wander and bounce off the frame.
 * - A few slow "movers" pull nearby dots into orbit (the attractors from the
 *   original sketch).
 * - The pointer pushes dots away (the repellers).
 * - The text block is a soft wall, so the flock flows around the name instead
 *   of over it.
 */

type Dot = { x: number; y: number; vx: number; vy: number };
type Mover = { x: number; y: number; vx: number; vy: number };

const ATTRACT_RADIUS = 110;
const REPEL_RADIUS = 90;

export default function Flock({ avoidSelector }: { avoidSelector?: string }) {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		let w = 0;
		let h = 0;
		let dots: Dot[] = [];
		let movers: Mover[] = [];
		let avoid: DOMRect[] = [];
		const pointer = { x: -9999, y: -9999, active: false };
		let color = "#000";
		let raf = 0;
		let visible = true;

		const readColor = () => {
			color = getComputedStyle(canvas).getPropertyValue("--dot").trim() || "#000";
		};

		const rand = (a: number, b: number) => a + Math.random() * (b - a);

		const measureAvoid = () => {
			if (!avoidSelector) return;
			const frame = canvas.getBoundingClientRect();
			const els = canvas.parentElement?.querySelectorAll(avoidSelector) ?? [];
			// One soft wall per text element, padded a little so dots don't graze the letters.
			avoid = Array.from(els).map((el) => {
				const box = el.getBoundingClientRect();
				return new DOMRect(box.left - frame.left - 10, box.top - frame.top - 10, box.width + 20, box.height + 20);
			});
		};

		const avoidAt = (x: number, y: number) =>
			avoid.find((r) => x > r.left && x < r.right && y > r.top && y < r.bottom);
		const insideAvoid = (x: number, y: number) => !!avoidAt(x, y);

		const seed = () => {
			const count = Math.round(Math.min(1100, Math.max(220, (w * h) / 1100)));
			dots = [];
			while (dots.length < count) {
				const x = rand(0, w);
				const y = rand(0, h);
				if (insideAvoid(x, y)) continue;
				dots.push({ x, y, vx: rand(-1, 1), vy: rand(-1, 1) });
			}
			const moverCount = w < 600 ? 2 : 3;
			movers = [];
			let tries = 0;
			while (movers.length < moverCount && tries++ < 200) {
				const x = rand(30, w - 30);
				const y = rand(30, h - 30);
				if (insideAvoid(x, y)) continue;
				movers.push({ x, y, vx: rand(-0.35, 0.35), vy: rand(-0.35, 0.35) });
			}
		};

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = rect.width;
			h = rect.height;
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			measureAvoid();
			seed();
			draw();
		};

		const step = () => {
			for (const m of movers) {
				m.x += m.vx;
				m.y += m.vy;
				if (m.x < 20 || m.x > w - 20) m.vx *= -1;
				if (m.y < 20 || m.y > h - 20) m.vy *= -1;
				const wall = avoidAt(m.x, m.y);
				if (wall) {
					// Movers stay off the text: step back out and turn around.
					m.x -= m.vx * 2;
					m.y -= m.vy * 2;
					if (m.x - m.vx > wall.left && m.x - m.vx < wall.right) m.vy *= -1;
					else m.vx *= -1;
				}
			}

			for (const d of dots) {
				let limit = 1.1;

				for (const m of movers) {
					const dx = m.x - d.x;
					const dy = m.y - d.y;
					const dist = Math.hypot(dx, dy);
					if (dist < ATTRACT_RADIUS && dist > 0.01) {
						// Pull in, plus a sideways push so dots orbit instead of piling up.
						d.vx += (dx / dist) * 0.06 - (dy / dist) * 0.05;
						d.vy += (dy / dist) * 0.06 + (dx / dist) * 0.05;
						limit = 2.4;
					}
				}

				if (pointer.active) {
					const dx = d.x - pointer.x;
					const dy = d.y - pointer.y;
					const dist = Math.hypot(dx, dy);
					if (dist < REPEL_RADIUS && dist > 0.01) {
						const f = (1 - dist / REPEL_RADIUS) * 0.9;
						d.vx += (dx / dist) * f;
						d.vy += (dy / dist) * f;
						limit = 4.5;
					}
				}

				const wall = avoidAt(d.x, d.y);
				if (wall) {
					// Push out through the nearest edge of the text block.
					const left = d.x - wall.left;
					const right = wall.right - d.x;
					const top = d.y - wall.top;
					const bottom = wall.bottom - d.y;
					const min = Math.min(left, right, top, bottom);
					if (min === left) d.vx -= 0.5;
					else if (min === right) d.vx += 0.5;
					else if (min === top) d.vy -= 0.5;
					else d.vy += 0.5;
					limit = 3;
				}

				// Gentle wander keeps the field alive when nothing is nearby.
				d.vx += rand(-0.04, 0.04);
				d.vy += rand(-0.04, 0.04);

				const speed = Math.hypot(d.vx, d.vy);
				if (speed > limit) {
					d.vx = (d.vx / speed) * limit;
					d.vy = (d.vy / speed) * limit;
				}
				// Relax back toward a calm cruising speed.
				d.vx *= 0.985;
				d.vy *= 0.985;

				d.x += d.vx;
				d.y += d.vy;
				if (d.x < 0 || d.x > w) {
					d.vx *= -1;
					d.x = Math.max(0, Math.min(w, d.x));
				}
				if (d.y < 0 || d.y > h) {
					d.vy *= -1;
					d.y = Math.max(0, Math.min(h, d.y));
				}
			}
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = color;
			for (const d of dots) ctx.fillRect(d.x, d.y, 1.6, 1.6);
			ctx.strokeStyle = color;
			ctx.lineWidth = 1.5;
			for (const m of movers) {
				ctx.beginPath();
				ctx.arc(m.x, m.y, 9, 0, Math.PI * 2);
				ctx.stroke();
			}
		};

		const loop = () => {
			if (!visible || reduceMotion.matches) return;
			step();
			draw();
			raf = requestAnimationFrame(loop);
		};

		const start = () => {
			cancelAnimationFrame(raf);
			if (visible && !reduceMotion.matches) raf = requestAnimationFrame(loop);
		};

		const onMove = (e: PointerEvent) => {
			const r = canvas.getBoundingClientRect();
			pointer.x = e.clientX - r.left;
			pointer.y = e.clientY - r.top;
			pointer.active = true;
		};
		const onLeave = () => {
			pointer.active = false;
		};

		const frame = canvas.parentElement!;
		frame.addEventListener("pointermove", onMove);
		frame.addEventListener("pointerleave", onLeave);

		const io = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting && document.visibilityState === "visible";
			start();
		});
		io.observe(canvas);

		const onVisibility = () => {
			visible = document.visibilityState === "visible";
			start();
		};
		document.addEventListener("visibilitychange", onVisibility);

		const ro = new ResizeObserver(resize);
		ro.observe(canvas);

		const scheme = window.matchMedia("(prefers-color-scheme: dark)");
		const onScheme = () => {
			readColor();
			draw();
		};
		scheme.addEventListener("change", onScheme);
		reduceMotion.addEventListener("change", start);

		readColor();
		resize();
		// Fonts can change the text block's size after first paint.
		document.fonts?.ready.then(() => {
			measureAvoid();
		});
		// Draw the first frame now, but hold the animation until the page has
		// finished loading so it doesn't compete with first paint.
		let idle = 0;
		const begin = () => {
			idle = window.setTimeout(start, 250);
		};
		if (document.readyState === "complete") begin();
		else window.addEventListener("load", begin, { once: true });

		return () => {
			window.clearTimeout(idle);
			window.removeEventListener("load", begin);
			cancelAnimationFrame(raf);
			io.disconnect();
			ro.disconnect();
			frame.removeEventListener("pointermove", onMove);
			frame.removeEventListener("pointerleave", onLeave);
			document.removeEventListener("visibilitychange", onVisibility);
			scheme.removeEventListener("change", onScheme);
			reduceMotion.removeEventListener("change", start);
		};
	}, [avoidSelector]);

	return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
