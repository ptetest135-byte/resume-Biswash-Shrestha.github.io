import { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Refs for consistent mutable state without re-renders
  const cursorRef = useRef({ x: 0, y: 0 });
  const trailerRef = useRef({ x: 0, y: 0 });

  // DOM refs to apply transforms directly for performance
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse event handlers
    const onMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      // Lerp factor (0.1 = slow/syrupy, 0.2 = responsive)
      const lerp = 0.15;

      const targetX = cursorRef.current.x;
      const targetY = cursorRef.current.y;

      // Calculate next position for the ring (lerp)
      trailerRef.current.x += (targetX - trailerRef.current.x) * lerp;
      trailerRef.current.y += (targetY - trailerRef.current.y) * lerp;

      // Apply transforms directly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${trailerRef.current.x}px, ${trailerRef.current.y}px) scale(${isClicking ? 0.8 : 1})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isClicking]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden mix-blend-difference">
      {/* The main dot - follows instantly */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-3 w-3 rounded-full bg-white transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
      {/* The trailing ring - follows with physics */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-10 w-10 rounded-full border border-white/50 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
    </div>
  );
};

export default CursorFollower;
