"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const nameVariations = [
  "MMZ",
  "Mozammil",
  "Moz",
  "Mozamil", // typo
  "Mozammil Sheikh",
  "M0z@mm!l",
  "Mozammml", // typo
  "MMZ.dev",
  "mozammil",
  "Mozammmil", // typo
  "M.M.Z",
];

interface TypingHeaderProps {
  onTextLengthChange: (length: number) => void;
}

export default function TypingHeader({ onTextLengthChange }: TypingHeaderProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentName, setCurrentName] = useState(nameVariations[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Update parent with current text length
    onTextLengthChange(displayText.length);
  }, [displayText, onTextLengthChange]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentName.length) {
          setDisplayText(currentName.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Pick random next name
          setIsDeleting(false);
          const randomIndex = Math.floor(Math.random() * nameVariations.length);
          setCurrentName(nameVariations[randomIndex]);
          // Wait before typing next
          setTimeout(() => {}, 500);
        }
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentName]);

  return (
    <Link
      href="/"
      className="text-xl font-semibold hover:opacity-70 transition-all hover:rotate-3"
      style={{
        transform: 'translateY(-2px)',
        display: 'inline-block',
        color: 'white',
        textShadow: '3px 3px 0 black',
        minWidth: '120px',
      }}
    >
      {displayText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </Link>
  );
}
