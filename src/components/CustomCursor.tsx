import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'play' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[role="dialog"]') || target.closest('.modal-content')) {
        if (target.closest('button') || target.closest('input') || target.closest('a')) {
          setCursorType('hover');
        } else {
          setCursorType('default');
        }
      } else if (target.closest('[data-cursor="play"]')) {
        setCursorType('play');
      } else if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        setCursorType('hover');
      } else if (target.closest('input') || target.closest('textarea')) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth trailing animation loop
    let animId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(animateTrailing);
    };
    animId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (isTouchDevice || !isVisible || cursorType === 'text') {
    return null;
  }

  return (
    <>
      {/* Inner pinpoint dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorType === 'play'
              ? 'w-0 h-0 opacity-0'
              : cursorType === 'hover'
              ? 'w-2 h-2 bg-[#C4A7FF] shadow-[0_0_12px_#8B5CF6]'
              : 'w-1.5 h-1.5 bg-[#F5F3FA]'
          }`}
        />
      </div>

      {/* Outer fluid aura ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s ease-out, background 0.25s ease-out',
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
            cursorType === 'play'
              ? 'w-20 h-20 bg-[#8B5CF6]/90 border-[#C4A7FF] text-white shadow-[0_0_30px_rgba(139,92,246,0.7)] backdrop-blur-sm -translate-x-1/2 -translate-y-1/2'
              : cursorType === 'hover'
              ? 'w-12 h-12 border-[#8B5CF6] bg-[#8B5CF6]/10 shadow-[0_0_20px_rgba(139,92,246,0.35)] -translate-x-1/2 -translate-y-1/2'
              : 'w-7 h-7 border-white/25 bg-transparent -translate-x-1/2 -translate-y-1/2'
          }`}
        >
          {cursorType === 'play' && (
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-display text-white">
              PLAY
            </span>
          )}
        </div>
      </div>
    </>
  );
};
