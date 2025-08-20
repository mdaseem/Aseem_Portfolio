'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import './FadeIn.css';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className = '', delay = '0.8s' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when it goes out of view
        }
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
