"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Frontend Developer",
  "UI Engineer",
  "React and Next.js Specialist",
  "AI-Driven Builder",
  "Full Stack Engineer",
];

const TYPEWRITER_SPEED = 80;
const ERASE_SPEED = 40;
const PAUSE_MS = 1800;

export default function RoleInfo() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isErasing && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, TYPEWRITER_SPEED);
    } else if (!isErasing && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsErasing(true), PAUSE_MS);
    } else if (isErasing && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, ERASE_SPEED);
    } else if (isErasing && displayed.length === 0) {
      setIsErasing(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isErasing, roleIndex]);

  return <>{displayed}</>;
}
