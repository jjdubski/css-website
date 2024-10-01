import { getAllEntries } from "@/lib/api";
import renderProjectsPreview from "@/app/_components/render/renderProjectPreview";

export default async function Projects() {
  const projects = await getAllEntries("projects");

  return (
    <section className="max-w-6xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Projects</h1>
      {projects.length === 0 ? (
        <p className="text-gray-600 text-center">No projects found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="w-full mx-auto"
            >
              {renderProjectsPreview(project)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
