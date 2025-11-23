"use client";

import { useEffect } from "react";

export default function ColorInverter() {
  useEffect(() => {
    const blink = (times: number, callback: () => void) => {
      let count = 0;
      const blinkInterval = setInterval(() => {
        if (count >= times * 2) {
          clearInterval(blinkInterval);
          callback();
          return;
        }

        // Toggle between inverted and normal
        if (count % 2 === 0) {
          document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
        } else {
          document.documentElement.style.filter = 'none';
        }
        document.documentElement.style.transition = 'filter 0s';
        count++;
      }, 80); // Blink every 80ms - almost instant
    };

    const scheduleNextInversion = () => {
      // Random interval between 20-30 seconds
      const intervalTime = Math.random() * 10000 + 20000; // 20000-30000ms

      setTimeout(() => {
        // Random number of blinks (2 or 3)
        const blinkCount = Math.random() > 0.5 ? 2 : 3;

        // Random duration between 5-10 seconds
        const inversionDuration = Math.random() * 5000 + 5000; // 5000-10000ms

        // Blink in
        blink(blinkCount, () => {
          // Stay inverted
          document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
          document.documentElement.style.transition = 'filter 0.3s ease-in-out';

          // Wait for inversion duration, then blink out
          setTimeout(() => {
            blink(blinkCount, () => {
              // Return to normal
              document.documentElement.style.filter = 'none';
              document.documentElement.style.transition = 'filter 0.3s ease-in-out';

              // Schedule next inversion
              scheduleNextInversion();
            });
          }, inversionDuration);
        });
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
