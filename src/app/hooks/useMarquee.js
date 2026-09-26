"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Custom hook for continuous marquee animation with touch and mouse scrubbing.
 *
 * @param {{ containerRef: React.RefObject<HTMLElement>, dependency?: any, duration?: number }} options
 * @returns {{ tweenRef: React.MutableRefObject<any>, dragHandlers: object }}
 */
export function useMarquee({ containerRef, dependency, duration = 40 } = {}) {
  const tweenRef = useRef(null);
  const dragState = useRef({ startX: 0, time: 0, isDragging: false });

  useEffect(() => {
    let ctx;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        tweenRef.current = gsap.to(".marquee-track", {
          xPercent: -50,
          ease: "none",
          duration,
          repeat: -1,
        });
        if (dragState.current.isDragging) {
          tweenRef.current.pause();
        }
      }, containerRef);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
      tweenRef.current = null;
    };
  }, [containerRef, dependency, duration]);

  const handleTouchStart = (e) => {
    if (!tweenRef.current) return;
    tweenRef.current.pause();
    dragState.current.isDragging = true;
    dragState.current.startX = e.touches[0].clientX;
    dragState.current.time = tweenRef.current.time();
  };

  const handleMouseDown = (e) => {
    if (!tweenRef.current) return;
    tweenRef.current.pause();
    dragState.current.isDragging = true;
    dragState.current.startX = e.clientX;
    dragState.current.time = tweenRef.current.time();
  };

  const handleDragMove = (currentX, currentTarget) => {
    if (!dragState.current.isDragging || !tweenRef.current) return;
    const trackElement = currentTarget;
    if (!trackElement) return;
    const scrollableDistance = trackElement.offsetWidth / 2;
    if (scrollableDistance <= 0) return;

    const deltaX = currentX - dragState.current.startX;
    const fraction = deltaX / scrollableDistance;
    const dur = tweenRef.current.duration();
    if (!dur) return;
    const deltaT = fraction * dur;

    let newTime = dragState.current.time - deltaT;
    newTime = newTime % dur;
    if (newTime < 0) newTime += dur;

    tweenRef.current.time(newTime);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleDragMove(e.touches[0].clientX, e.currentTarget);
    }
  };
  const handleMouseMove = (e) => handleDragMove(e.clientX, e.currentTarget);

  const handleTouchEnd = () => {
    dragState.current.isDragging = false;
    if (!tweenRef.current) return;
    tweenRef.current.play();
  };

  const handleMouseUp = () => {
    dragState.current.isDragging = false;
  };

  const handleMouseLeave = () => {
    dragState.current.isDragging = false;
    if (!tweenRef.current) return;
    tweenRef.current.play();
  };

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  return {
    tweenRef,
    dragHandlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
    },
  };
}
