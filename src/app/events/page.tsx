import { getAllEntries } from "@/lib/api";
import renderEventPreview from "@/app/_components/render/renderEventPreview"

export default async function Events() {
    const events = await getAllEntries("events");
    return (
      <section className="flex flex-row md:items-start mt-8">
        <div>
          <h1>All Events</h1>
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            <ul>
              {events.map(event => (
                <>
                  {renderEventPreview(event)}
                </>
              ))}
            </ul>
          )}
        </div>
      </section>
    );
  }
  