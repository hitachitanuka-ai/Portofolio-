import React, { useEffect, useRef, useState } from 'react';

export type ScrollRevealVariant = 'editorial' | 'card' | 'media' | 'subtle';

interface VariantPreset {
  y: number;
  scale: number;
  blur: number;
  duration: number;
}

const VARIANT_PRESETS: Record<ScrollRevealVariant, VariantPreset> = {
  editorial: { y: 20, scale: 0.986, blur: 6, duration: 0.85 },
  card: { y: 22, scale: 0.982, blur: 5, duration: 0.82 },
  media: { y: 18, scale: 0.976, blur: 8, duration: 1.02 },
  subtle: { y: 14, scale: 0.992, blur: 4, duration: 0.74 },
};

// Luxury corporate cubic-bezier deceleration curve (smooth, unhurried, zero bounce)
const LUXURY_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

// Shared IntersectionObserver pool keyed by `${threshold}|${rootMargin}` for optimal scroll performance
interface ObserverBucket {
  observer: IntersectionObserver;
  callbacks: Map<Element, () => void>;
}

const observerBuckets = new Map<string, ObserverBucket>();

function subscribeToObserver(
  element: Element,
  threshold: number,
  rootMargin: string,
  onIntersect: () => void
): () => void {
  const bucketKey = `${threshold}|${rootMargin}`;
  let bucket = observerBuckets.get(bucketKey);

  if (!bucket) {
    const callbacks = new Map<Element, () => void>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              cb();
              callbacks.delete(entry.target);
              observer.unobserve(entry.target);
            }
          }
        }
      },
      { threshold, rootMargin }
    );
    bucket = { observer, callbacks };
    observerBuckets.set(bucketKey, bucket);
  }

  bucket.callbacks.set(element, onIntersect);
  bucket.observer.observe(element);

  return () => {
    const currentBucket = observerBuckets.get(bucketKey);
    if (!currentBucket) return;
    currentBucket.callbacks.delete(element);
    currentBucket.observer.unobserve(element);
    if (currentBucket.callbacks.size === 0) {
      currentBucket.observer.disconnect();
      observerBuckets.delete(bucketKey);
    }
  };
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'article' | 'span' | 'footer';
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  blur?: number;
  threshold?: number;
  rootMargin?: string;
  /** Useful for above-the-fold hero typography/images that should play a smooth entrance right on mount */
  immediateOnMount?: boolean;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  as = 'div',
  variant = 'editorial',
  delay = 0,
  duration,
  y,
  scale,
  blur,
  threshold = 0.05,
  rootMargin = '0px 0px -36px 0px',
  immediateOnMount = false,
  id,
  onClick,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = prefersReducedMotion();

  const [isVisible, setIsVisible] = useState<boolean>(reducedMotion);
  const [hasSettled, setHasSettled] = useState<boolean>(reducedMotion);

  const preset = VARIANT_PRESETS[variant];
  const resolvedDuration = Math.min(1.2, Math.max(0.7, duration ?? preset.duration));
  const resolvedY = y ?? preset.y;
  const resolvedScale = scale ?? preset.scale;
  const resolvedBlur = blur ?? preset.blur;

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      setHasSettled(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let cancelled = false;
    let raf1 = 0;
    let raf2 = 0;

    const triggerReveal = () => {
      if (!cancelled) {
        setIsVisible(true);
      }
    };

    if (immediateOnMount) {
      // Double-rAF guarantees initial hidden frame paints cleanly before transitioning
      raf1 = window.requestAnimationFrame(() => {
        raf2 = window.requestAnimationFrame(triggerReveal);
      });
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(raf1);
        window.cancelAnimationFrame(raf2);
      };
    }

    // Immediate above-the-fold safety check in case element starts inside viewport
    const rect = node.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.96 && rect.bottom >= 0) {
      raf1 = window.requestAnimationFrame(() => {
        raf2 = window.requestAnimationFrame(triggerReveal);
      });
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(raf1);
        window.cancelAnimationFrame(raf2);
      };
    }

    const unsubscribe = subscribeToObserver(node, threshold, rootMargin, triggerReveal);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      unsubscribe();
    };
  }, [immediateOnMount, reducedMotion, rootMargin, threshold]);

  // Clear compositor hints & filter layer once reveal finishes for razor-sharp text & clean hover contexts
  useEffect(() => {
    if (!isVisible || hasSettled) return;
    const totalMs = Math.ceil((resolvedDuration + delay) * 1000) + 80;
    const timer = window.setTimeout(() => {
      setHasSettled(true);
    }, totalMs);
    return () => window.clearTimeout(timer);
  }, [delay, hasSettled, isVisible, resolvedDuration]);

  const Component = as as React.ElementType;

  const style: React.CSSProperties = hasSettled
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate3d(0px, 0px, 0px) scale(1)'
          : `translate3d(0px, ${resolvedY}px, 0px) scale(${resolvedScale})`,
        filter: isVisible ? 'blur(0px)' : `blur(${resolvedBlur}px)`,
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${resolvedDuration}s, ${resolvedDuration}s, ${resolvedDuration}s`,
        transitionTimingFunction: LUXURY_EASING,
        transitionDelay: `${delay}s`,
        willChange: 'opacity, transform, filter',
      };

  return (
    <Component ref={ref} id={id} onClick={onClick} style={style} className={className}>
      {children}
    </Component>
  );
};
