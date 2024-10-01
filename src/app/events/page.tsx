import { getAllEntries } from "@/lib/api";
import renderEventPreview from "@/app/_components/render/renderEventPreview"

export default async function Events() {
    const events = await getAllEntries("events");
    
    return (
      <section className="flex flex-col items-center mt-8 mx-4 md:mx-12">
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Events</h1>
                {events.length === 0 ? (
                    <p className="text-gray-600 text-center">Oops! No events here. Check back later!</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event) => (
                            <li key={event.title}>
                                {renderEventPreview(event)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
  }
  