import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
  images?: string[];
}

const projectsData: Record<string, ProjectData> = {
  "example-project": {
    id: "example-project",
    title: "Example Project",
    description: "This is a sample project to demonstrate the layout.",
    longDescription:
      "This is a more detailed description of the project. You can add multiple paragraphs here to explain what the project does, the technologies used, challenges faced, and solutions implemented.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Feature 1: Description of a key feature",
      "Feature 2: Description of another feature",
      "Feature 3: Description of yet another feature",
    ],
  },
  // Add more projects here
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <Link
          href="/"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {(project.demoUrl || project.githubUrl) && (
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition-opacity"
            >
              View Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">About this project</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.longDescription}
        </p>
      </div>

      {project.features && project.features.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="text-gray-600 dark:text-gray-400 flex items-start"
              >
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
