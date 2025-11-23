export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Git",
    "Firebase",
    "SQL",
    "UI Design",
    "Figma",
    "Wireframing",
    "Prototyping",
    "Branding",
    "Research",
    "Data Visualization",
    "Community Mapping",
    "Premiere Pro",
    "DaVinci Resolve",
    "Blender",
    "Storyboarding",
    "Canva",
    "AI Tools",
    "Automation",
    "Notion",
    "Obsidian",
    "Excel",
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

        <div className="mx-auto border-4 border-black rounded-lg p-6 bg-white" style={{ maxWidth: '800px', transform: 'rotate(0.8deg)', boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.3)' }}>
          <p className="text-lg leading-relaxed mb-4">
            <span style={{ background: '#ff6b9d', color: '#ffffff', textShadow: '2px 2px 0 #000000', padding: '2px 6px', borderRadius: '2px' }}>Mozammil</span> does not work in straight lines. He moves between ideas unpredictably, driven by impulse, curiosity, and experimentation. Projects appear, shift direction, collide into each other, or vanish without warning. To him, that is not chaos by accident — it is chaos by design.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            He rejects fixed labels, predefined roles, or professional identities. He is not positioning himself as a specialist, an expert, or a neatly packaged creator. He refuses the expectation to define himself through a single craft, discipline, or industry.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This space exists purely for exploration. It is where he builds freely: experiments, prototypes, unfinished fragments, unconventional concepts, failures, and occasional breakthroughs. There is no narrative of mastery or linear progress here. Only motion.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            He uses whatever tools allow him to chase ideas, including AI, code, randomness, and instinct. He does not owe consistency, explanations, or a clear destination.
          </p>
          <p className="text-lg leading-relaxed font-bold mb-4">
            This is not a portfolio in the traditional sense.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            It is a playground for creation without restraint.
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
              href="mailto:nerdunsure+web@gmail.com?body=Please don't edit the email address. Changing it may delay or prevent my reply."
              className="font-bold text-lg hover:scale-105 transition-transform inline-block"
              style={{
                borderBottom: '3px solid #ff6b9d',
                paddingBottom: '4px',
                color: '#1e293b',
                transform: 'rotate(0.5deg)',
              }}
            >
              Email
            </a>
            <a
              href="https://github.com/unsureifnerd"
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
          </div>
        </div>
      </section>
    </div>
  );
}
