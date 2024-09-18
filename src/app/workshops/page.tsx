import { getAllEntries } from "@/lib/api";
import renderWorkshopPreview from "@/app/_components/render/renderWorkshopPreview"

export default async function Workshops() {
    const workshops = await getAllEntries("workshops");
    return (
      <section className="flex flex-row md:items-start mt-8">
        {workshops.length === 0 ? (
            <p>No workshops found.</p>
          ) : (
            <ul>
              {workshops.map(workshop => (
                <>
                  {renderWorkshopPreview(workshop)}
                </>
              ))}
            </ul>
          )}
      </section>
    );
  }
  