"use client";

import { useEffect, useRef, useState } from "react";

export default function SpringCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Check if touch device
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .work-item, [role='button']")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .work-item, [role='button']")) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      // Lerp ring position for spring effect
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.15;
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - 16}px, ${ringPosRef.current.y - 16}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Dot - follows exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#e8e4dc",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      {/* Ring - follows with lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference transition-[width,height,border-width] duration-200"
        style={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          border: `1px solid ${isHovering ? "rgba(232,228,220,0.6)" : "rgba(232,228,220,0.3)"}`,
          borderRadius: "50%",
          willChange: "transform",
          marginLeft: isHovering ? -8 : 0,
          marginTop: isHovering ? -8 : 0,
        }}
      />
    </>
  );
}
