"use client";

import { useState } from "react";
import Link from "next/link";
import TypingHeader from "./TypingHeader";

export default function DynamicNav() {
  const [textLength, setTextLength] = useState(0);

  // Calculate dynamic tilt based on text length
  // Longer text = more negative rotation (leaning more to the right)
  const baseTilt = 0; // Perfectly horizontal when empty
  const maxTilt = -5; // Maximum tilt when name is longest
  const tiltPerChar = (baseTilt - maxTilt) / 17; // 17 is roughly max length
  const currentTilt = baseTilt - (textLength * tiltPerChar);

  return (
    <nav
      className="border-b-4 border-black"
      style={{
        transform: `rotate(${currentTilt}deg)`,
        background: '#1e293b',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        zIndex: 10,
        transition: 'transform 0.6s ease-in-out',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16" style={{ transform: 'rotate(0.4deg)' }}>
          <TypingHeader onTextLengthChange={setTextLength} />
          <div className="flex gap-6" style={{ marginTop: '-7px', transform: 'rotate(-1.1deg)' }}>
            <Link
              href="/"
              className="hover:opacity-70 transition-all"
              style={{
                transform: 'rotate(-2.3deg) translateY(3px)',
                display: 'inline-block',
                color: 'white',
                textShadow: '2px 2px 0 black'
              }}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:opacity-70 transition-all"
              style={{
                transform: 'rotate(2.5deg) translateY(-2px)',
                display: 'inline-block',
                marginTop: '3px',
                color: 'white',
                textShadow: '2px 2px 0 black'
              }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
