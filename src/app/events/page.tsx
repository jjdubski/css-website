import { getAllEntries } from "@/lib/api";

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
                <li key={event.slug}>
                  <a href={`/events/${event.slug}`}>{event.title}</a>
                  <div>{event.description}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    );
  }
  