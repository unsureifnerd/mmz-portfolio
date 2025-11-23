"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "example-project",
    title: "Example Project",
    description: "This is a sample project to demonstrate the layout. Replace this with your actual projects.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
  },
  // Add more projects here
];

const nameTexts = ["Mozammil", "Moz", "MMZ", "moZAMMil", "M0z@mm!l", "MoZaMmIl", "mOZAMMIL", "mozammil", "M.M.Z"];
const effectTypes = ["normal", "chromatic", "bounce", "big", "huge", "glitch"];

const generateRandomVariation = (text: string) => {
  return text.split('').map(() => {
    const rand = Math.random();
    if (rand < 0.5) return "normal";
    if (rand < 0.65) return "chromatic";
    if (rand < 0.75) return "bounce";
    if (rand < 0.85) return "big";
    if (rand < 0.92) return "huge";
    return "glitch";
  });
};

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function Home() {
  const [currentVariation, setCurrentVariation] = useState({
    text: nameTexts[0],
    styles: generateRandomVariation(nameTexts[0])
  });
  const [displayText, setDisplayText] = useState(nameTexts[0]);
  const [scrambling, setScrambling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrambling(true);

      // Pick random name text
      const randomIndex = Math.floor(Math.random() * nameTexts.length);
      const targetText = nameTexts[randomIndex];

      // Scramble animation
      let iterations = 0;
      const scrambleInterval = setInterval(() => {
        setDisplayText(
          targetText
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return targetText[index];
              }
              return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            })
            .join('')
        );

        iterations += 1/3;

        if (iterations >= targetText.length) {
          clearInterval(scrambleInterval);
          setCurrentVariation({
            text: targetText,
            styles: generateRandomVariation(targetText)
          });
          setScrambling(false);
        }
      }, 50);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="space-y-12 relative">
      {/* Random scattered elements */}
      <div className="absolute top-10 right-20 text-6xl animate-wobble chromatic" style={{ transform: 'rotate(15deg)' }}>
        ⚡
      </div>
      <div className="absolute top-32 left-10 text-4xl animate-shake" style={{ transform: 'rotate(-25deg)' }}>
        💥
      </div>
      <div className="absolute top-64 right-32 text-5xl animate-float-random" style={{ transform: 'rotate(8deg)' }}>
        ⭐
      </div>
      <div className="absolute bottom-40 left-24 text-7xl animate-tilt-shake chromatic" style={{ transform: 'rotate(-12deg)' }}>
        🎨
      </div>
      <div className="absolute top-96 right-16 font-bold text-3xl animate-wind chromatic" style={{ transform: 'rotate(20deg)', color: '#ff6b9d', textShadow: '2px 2px 0 black' }}>
        BOOM!
      </div>
      <div className="absolute top-48 left-1/3 font-bold text-2xl animate-wobble" style={{ transform: 'rotate(-18deg)', color: '#818cf8', textShadow: '2px 2px 0 black' }}>
        ???
      </div>
      <div className="absolute bottom-64 right-1/4 text-4xl animate-shake" style={{ transform: 'rotate(30deg)' }}>
        🚀
      </div>
      <div className="absolute top-12 left-1/3 w-12 h-12 border-4 border-black bg-green-400 animate-float-random" style={{ transform: 'rotate(45deg)', boxShadow: '4px 4px 0 black' }}></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 rounded-full bg-purple-500 border-4 border-black animate-wind" style={{ boxShadow: '5px 5px 0 black' }}></div>
      <div className="absolute top-80 right-48 font-bold text-4xl animate-tilt-shake chromatic" style={{ transform: 'rotate(-8deg)', color: '#4ade80', textShadow: '3px 3px 0 black' }}>
        *
      </div>

      {/* More elements for bigger screens */}
      <div className="hidden lg:block absolute top-24 left-1/4 text-5xl animate-shake" style={{ transform: 'rotate(-35deg)' }}>
        🔥
      </div>
      <div className="hidden lg:block absolute top-56 right-1/3 text-3xl animate-wobble chromatic" style={{ transform: 'rotate(22deg)' }}>
        💫
      </div>
      <div className="hidden lg:block absolute bottom-20 left-1/2 text-6xl animate-float-random" style={{ transform: 'rotate(-15deg)' }}>
        🌟
      </div>
      <div className="hidden lg:block absolute top-40 right-12 font-bold text-4xl animate-tilt-shake chromatic" style={{ transform: 'rotate(18deg)', color: '#fbbf24', textShadow: '3px 3px 0 black' }}>
        POW!
      </div>
      <div className="hidden lg:block absolute bottom-56 right-40 font-bold text-3xl animate-wind" style={{ transform: 'rotate(-28deg)', color: '#ff6b9d', textShadow: '2px 2px 0 black' }}>
        ZAP!
      </div>
      <div className="hidden lg:block absolute top-72 left-20 text-4xl animate-shake" style={{ transform: 'rotate(12deg)' }}>
        ✨
      </div>
      <div className="hidden lg:block absolute bottom-48 left-1/3 text-5xl animate-wobble chromatic" style={{ transform: 'rotate(-22deg)' }}>
        🎯
      </div>
      <div className="hidden lg:block absolute top-16 left-2/3 w-14 h-14 border-4 border-black bg-yellow-400 animate-tilt-shake" style={{ transform: 'rotate(30deg)', boxShadow: '5px 5px 0 black' }}></div>
      <div className="hidden lg:block absolute bottom-24 right-1/3 w-10 h-10 rounded-full bg-pink-500 border-4 border-black animate-float-random" style={{ boxShadow: '4px 4px 0 black' }}></div>
      <div className="hidden lg:block absolute top-88 left-16 font-bold text-5xl animate-shake chromatic" style={{ transform: 'rotate(25deg)', color: '#818cf8', textShadow: '3px 3px 0 black' }}>
        !
      </div>
      <div className="hidden lg:block absolute top-36 right-64 text-3xl animate-wind" style={{ transform: 'rotate(-40deg)' }}>
        💎
      </div>
      <div className="hidden lg:block absolute bottom-72 left-40 text-4xl animate-wobble" style={{ transform: 'rotate(16deg)' }}>
        🌈
      </div>
      <div className="hidden lg:block absolute top-44 left-12 w-8 h-8 bg-red-500 border-4 border-black animate-shake" style={{ transform: 'rotate(-20deg)', boxShadow: '3px 3px 0 black' }}></div>
      <div className="hidden lg:block absolute bottom-16 right-20 font-bold text-2xl animate-float-random" style={{ transform: 'rotate(32deg)', color: '#4ade80', textShadow: '2px 2px 0 black' }}>
        WOW!
      </div>

      {/* Teleporting/Popping elements */}
      <div className="absolute teleport-element text-4xl" style={{ top: '15%', left: '80%' }}>
        💭
      </div>
      <div className="absolute pop-move-1 text-3xl pointer-events-none">
        ✦
      </div>
      <div className="absolute pop-move-2 w-6 h-6 rounded-full bg-cyan-400 border-2 border-black pointer-events-none" style={{ boxShadow: '3px 3px 0 black' }}></div>
      <div className="absolute pop-move-3 text-2xl pointer-events-none" style={{ color: '#fbbf24', textShadow: '2px 2px 0 black' }}>
        ◆
      </div>
      <div className="hidden lg:block absolute teleport-element w-10 h-10 bg-orange-400 border-4 border-black pointer-events-none" style={{ top: '70%', right: '15%', animationDelay: '3s', boxShadow: '4px 4px 0 black' }}></div>
      <div className="hidden lg:block absolute teleport-element text-3xl" style={{ bottom: '20%', right: '8%', animationDelay: '1.5s' }}>
        ⚡
      </div>
      <div className="hidden lg:block absolute pop-move-1 font-bold text-xl pointer-events-none" style={{ color: '#ff6b9d', textShadow: '2px 2px 0 black', animationDelay: '4s' }}>
        PING!
      </div>
      <div className="hidden lg:block absolute pop-move-2 text-4xl pointer-events-none" style={{ animationDelay: '2.5s' }}>
        💀
      </div>
      <div className="hidden lg:block absolute pop-move-3 w-8 h-8 rounded-full bg-pink-400 border-3 border-black pointer-events-none" style={{ animationDelay: '1s', boxShadow: '3px 3px 0 black' }}></div>

      {/* Comic dialog box */}
      <div className="comic-dialog mb-8 animate-wind mx-auto" style={{ maxWidth: '500px', transform: 'rotate(-1.5deg)' }}>
        <p className="text-lg text-center" style={{ transform: 'rotate(0.8deg)' }}>
          Welcome to the CHAOS ZONE! Nothing here makes sense, and that's the point!
        </p>
      </div>

      <section className="space-y-8 text-center" style={{ transform: 'rotate(0.7deg)' }}>
        <div>
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight animate-wobble"
            style={{
              transform: 'rotate(-2.1deg)',
              display: 'inline-block',
            }}
          >
            HI, I'm
          </h1>
          <div
            style={{
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'visible',
              marginTop: '1rem'
            }}
          >
            <div className={`text-5xl sm:text-7xl font-black ${scrambling ? 'counter-effect' : ''}`} style={{ lineHeight: '1' }}>
              {displayText.split('').map((char, index) => {
                const style = currentVariation.styles[index] || "normal";
                let className = "";
                let fontSize = "1em";

                if (style === "chromatic" && !scrambling) className = "name-chromatic";
                if (style === "bounce" && !scrambling) className = "name-bounce";
                if (style === "glitch" && !scrambling) className = "name-glitch";
                if (style === "big") fontSize = "1.3em";
                if (style === "huge") fontSize = "1.6em";

                return (
                  <span
                    key={index}
                    className={className}
                    style={{
                      fontSize,
                      display: 'inline-block',
                      transform: `rotate(${Math.random() * 6 - 3}deg)`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <p
          className="text-xl text-gray-700 max-w-3xl mx-auto animate-float-random"
          style={{
            transform: 'rotate(1.8deg)',
          }}
        >
          I build web applications, experimental demos, and creative projects.
          This is my playground where I showcase everything I work on - technical experiments,
          wild ideas, side projects, and everything in between. No rules, no limits, just pure creation.
        </p>
        <div className="flex justify-center">
          <Link
            href="/about"
            className="font-bold text-lg hover:scale-105 hover:bg-green-400/20 active:bg-green-400/30 transition-all inline-block px-3 py-1 rounded"
            style={{
              transform: 'rotate(-1.2deg)',
              borderBottom: '3px solid #4ade80',
              paddingBottom: '4px',
              color: '#1e293b'
            }}
          >
            &lt; Read more &gt;
          </Link>
        </div>
      </section>

      <section className="space-y-6 text-center" style={{ transform: 'rotate(-1.2deg)' }}>
        <h2
          className="text-2xl font-semibold animate-shake"
          style={{
            transform: 'rotate(2.8deg) translateY(-3px)',
            display: 'inline-block'
          }}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-wind" style={{ transform: 'rotate(0.5deg)' }}>
          {projects.map((project, index) => {
            const colors = ['#ff6b9d', '#4ade80', '#818cf8', '#fbbf24'];
            const bgColor = colors[index % colors.length];
            const rotations = ['-2.3deg', '1.8deg', '-1.5deg', '2.1deg'];
            const translations = ['translateX(-5px) translateY(8px)', 'translateX(7px) translateY(-4px)', 'translateX(-3px) translateY(5px)', 'translateX(4px) translateY(-7px)'];
            return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group border-4 border-black rounded-lg p-6 transition-all hover:shadow-lg"
              style={{
                transform: `rotate(${rotations[index % rotations.length]}) ${translations[index % translations.length]}`,
                marginTop: `${15 + (index * 8)}px`,
                background: bgColor,
                boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="space-y-3" style={{ transform: 'rotate(-0.6deg)' }}>
                <h3
                  className="text-xl font-semibold transition-colors"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '-' : ''}1.8deg) translateX(${index % 2 === 0 ? '-' : ''}3px)`,
                    display: 'inline-block',
                    color: 'white',
                    textShadow: '3px 3px 0 black'
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white font-semibold"
                  style={{
                    transform: 'rotate(0.9deg) translateY(2px)',
                    textShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2" style={{ transform: 'rotate(-0.4deg)' }}>
                  {project.tags.map((tag, tagIndex) => {
                    const tagRotations = ['-2.5deg', '1.9deg', '-1.3deg', '2.2deg', '-1.7deg'];
                    return (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-white border-2 border-black rounded hover:bg-black hover:text-white transition-all cursor-default"
                      style={{
                        transform: `rotate(${tagRotations[tagIndex % tagRotations.length]}) translateY(${tagIndex % 2 === 0 ? '-' : ''}1px)`,
                        display: 'inline-block'
                      }}
                    >
                      {tag}
                    </span>
                    );
                  })}
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
