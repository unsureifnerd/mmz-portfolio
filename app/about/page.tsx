export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git",
  ];

  const skillColors = ['#ff6b9d', '#4ade80', '#818cf8', '#fbbf24'];

  return (
    <div className="max-w-4xl mx-auto space-y-16 relative">
      {/* Subtle scattered elements - fewer than homepage */}
      <div className="absolute top-10 right-10 text-4xl animate-wobble" style={{ transform: 'rotate(15deg)' }}>
        ✨
      </div>
      <div className="absolute bottom-20 left-10 text-3xl animate-float-random" style={{ transform: 'rotate(-20deg)' }}>
        💭
      </div>
      <div className="absolute top-1/2 right-16 text-2xl animate-shake" style={{ transform: 'rotate(12deg)', color: '#818cf8', textShadow: '2px 2px 0 black' }}>
        *
      </div>

      {/* Header */}
      <section className="text-center space-y-6">
        <h1
          className="text-5xl sm:text-6xl font-bold tracking-tight inline-block"
          style={{ transform: 'rotate(-1.2deg)' }}
        >
          About Me
        </h1>

        <div className="mx-auto border-4 border-black rounded-lg p-6 bg-white" style={{ maxWidth: '700px', transform: 'rotate(0.8deg)', boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.3)' }}>
          <p className="text-lg leading-relaxed mb-4">
            Hi! I&apos;m <span style={{ background: '#ff6b9d', color: '#ffffff', textShadow: '2px 2px 0 #000000', padding: '2px 6px', borderRadius: '2px' }}>Mozammil</span>, a developer and creator. I love building
            web applications, exploring new technologies, and bringing ideas to life.
          </p>
          <p className="text-lg leading-relaxed">
            This portfolio showcases my projects, experiments, and technical work.
            Feel free to explore and reach out if you&apos;d like to connect.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6 text-center">
        <h2
          className="text-3xl font-semibold inline-block"
          style={{ transform: 'rotate(1.5deg)' }}
        >
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 border-4 border-black rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{
                background: skillColors[index % skillColors.length],
                transform: `rotate(${index % 2 === 0 ? '-' : ''}${Math.random() * 3}deg)`,
                boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-6 text-center">
        <h2
          className="text-3xl font-semibold inline-block"
          style={{ transform: 'rotate(-1.8deg)' }}
        >
          Get in Touch
        </h2>

        <div className="mx-auto border-4 border-black rounded-lg p-6 bg-white" style={{ maxWidth: '600px', transform: 'rotate(-0.5deg)', boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.3)' }}>
          <p className="text-lg mb-6">
            I&apos;m always open to interesting conversations and opportunities.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:your.email@example.com"
              className="font-bold text-lg hover:scale-105 transition-transform inline-block"
              style={{
                borderBottom: '3px solid #ff6b9d',
                paddingBottom: '4px',
                color: '#1e293b',
                transform: 'rotate(0.5deg)',
              }}
            >
              your.email@example.com
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg hover:scale-105 transition-transform inline-block"
              style={{
                borderBottom: '3px solid #4ade80',
                paddingBottom: '4px',
                color: '#1e293b',
                transform: 'rotate(-0.8deg)',
              }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg hover:scale-105 transition-transform inline-block"
              style={{
                borderBottom: '3px solid #818cf8',
                paddingBottom: '4px',
                color: '#1e293b',
                transform: 'rotate(1.2deg)',
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
