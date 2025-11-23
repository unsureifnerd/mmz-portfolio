"use client";

import { useEffect } from "react";

export default function ColorInverter() {
  useEffect(() => {
    const scheduleNextInversion = () => {
      // Random interval between 20-30 seconds
      const intervalTime = Math.random() * 10000 + 20000; // 20000-30000ms

      setTimeout(() => {
        // Random duration between 5-10 seconds
        const inversionDuration = Math.random() * 5000 + 5000; // 5000-10000ms

        // Apply inversion to html (root element - affects everything)
        document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
        document.documentElement.style.transition = 'filter 0.3s ease-in-out';

        // Remove inversion after duration
        setTimeout(() => {
          document.documentElement.style.filter = 'none';
          // Schedule next inversion
          scheduleNextInversion();
        }, inversionDuration);
      }, intervalTime);
    };

    // Start the cycle
    scheduleNextInversion();

    // Cleanup on unmount
    return () => {
      document.documentElement.style.filter = 'none';
    };
  }, []);

  return null;
}
