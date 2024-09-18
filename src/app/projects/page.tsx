import { getAllEntries } from "@/lib/api";
import renderProjectsPreview from "@/app/_components/render/renderProjectPreview"

export default async function Projects() {
    const projects = await getAllEntries("projects");
    return (
      <section className="flex flex-row md:items-start mt-8">
        {projects.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            <ul>
              {projects.map(project => (
                <>
                  {renderProjectsPreview(project)}
                </>
              ))}
            </ul>
          )}
      </section>
    );
  }
  