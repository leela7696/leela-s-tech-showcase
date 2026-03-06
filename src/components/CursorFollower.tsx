import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const BASE_SIZE = 18;
const EASING = 0.18;
const ORANGE_SIZE = 10;
const ORANGE_EASING = 0.1;

function isInteractive(el: Element | null): boolean {
  if (!el) return false;
  return !!el.closest(
    'a, button, [role="button"], .card, .btn, .link, [data-interactive="true"]'
  );
}

export default function CursorFollower() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const elRef = useRef<HTMLDivElement | null>(null);
  const orangeRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100, scale: 1 });
  const currentOrange = useRef({ x: -100, y: -100 });
  const hoverScale = useRef({ target: 1, base: 1, hover: 1.6 });
  const rafRef = useRef<number | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      hoverScale.current.target = isInteractive(t) ? hoverScale.current.hover : hoverScale.current.base;
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOver);
    };
  }, [isMobile, prefersReducedMotion]);

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const animate = () => {
      const nx = current.current.x + (target.current.x - current.current.x) * EASING;
      const ny = current.current.y + (target.current.y - current.current.y) * EASING;
      const ns = current.current.scale + (hoverScale.current.target - current.current.scale) * 0.12;
      current.current = { x: nx, y: ny, scale: ns };

      const onx = currentOrange.current.x + (target.current.x - currentOrange.current.x) * ORANGE_EASING;
      const ony = currentOrange.current.y + (target.current.y - currentOrange.current.y) * ORANGE_EASING;
      currentOrange.current = { x: onx, y: ony };

      if (elRef.current) {
        const offsetX = nx - BASE_SIZE / 2;
        const offsetY = ny - BASE_SIZE / 2;
        elRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${ns})`;
      }
      if (orangeRef.current) {
        const offsetX = onx - ORANGE_SIZE / 2;
        const offsetY = ony - ORANGE_SIZE / 2;
        orangeRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, prefersReducedMotion]);

  if (isMobile || !mounted) return null;

  return createPortal(
    <>
      <div
        ref={elRef}
        aria-hidden="true"
        className="cursor-follower"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: BASE_SIZE,
          height: BASE_SIZE,
          borderRadius: "9999px",
          pointerEvents: "none",
          zIndex: 9999,
          background: "radial-gradient(circle at 30% 30%, #7c3aed 0%, #22d3ee 70%)",
          filter: "blur(8px)",
          opacity: 0.9,
          transform: `translate3d(-100px, -100px, 0)`,
          transformOrigin: "center center",
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={orangeRef}
        aria-hidden="true"
        className="cursor-follower"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: ORANGE_SIZE,
          height: ORANGE_SIZE,
          borderRadius: "9999px",
          pointerEvents: "none",
          zIndex: 10000,
          background: "radial-gradient(circle at 30% 30%, #f59e0b 0%, #fb923c 70%)",
          filter: "blur(6px)",
          opacity: 0.95,
          transform: `translate3d(-100px, -100px, 0)`,
          transformOrigin: "center center",
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
    </>,
    document.body
  );
}
