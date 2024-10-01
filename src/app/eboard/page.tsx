import rendereBoardSquare from "@/app/_components/render/rendereBoardSquare"
import Entry from "@/app/types/Entry"
import { getAllEntries } from "@/lib/api";

export default async function eBoard() {
    const eboard = await getAllEntries("eboard");

    if (!eboard) {
      return notFound();
    }

    return (
      <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {eboard.map((member) => (
          <li key={member.title} className="rounded-lg shadow-md list-none">
            {rendereBoardSquare(member.slug)}
          </li>
        ))}
      </ul>
    </>
    );
  }
  