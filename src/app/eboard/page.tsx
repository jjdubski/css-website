import rendereBoardSquare from "@/app/_components/render/rendereBoardSquare"
import Entry from "@/app/types/Entry"
import { getAllEntries } from "@/lib/api";

export default async function eBoard() {
    const eboard = await getAllEntries("eboard");

    if (!eboard) {
      return notFound();
    }

    const firstRow = eboard.slice(0, 2);
    const rest = eboard.slice(2, eboard.length);

    return (
      <>
      <ul className="max-w-7xl mx-auto space-y-4 mb-16">
        <li className="grid grid-cols-2 gap-2">
          {firstRow.map((member) => (
            <div key={member.title} className="list-none">
              {rendereBoardSquare(member.slug)}
            </div>
          ))}
        </li>

        <li className="grid grid-cols-3 gap-4">
          {rest.map((member) => (
            <div key={member.title} className="list-none">
              {rendereBoardSquare(member.slug)}
            </div>
          ))}
        </li>
      </ul>
    </>
    );
  }
  