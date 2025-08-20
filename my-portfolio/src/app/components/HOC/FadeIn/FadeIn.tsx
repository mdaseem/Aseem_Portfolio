'use client';
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import './FadeIn.css';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., '0.5s'
}

const FadeIn: React.FC<FadeInProps> = ({ children, className = '', delay = '0.8s' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current); // stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
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
