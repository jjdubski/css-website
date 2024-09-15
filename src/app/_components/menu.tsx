import Link from 'next/link';

export function Menu() {
  return (
    <nav className="flex justify-center">
      <div className="flex flex-row w-80 justify-between">
        <Link className="text-lg" href="/">About</Link>
        <Link className="text-lg" href="/events">Events</Link>
        <Link className="text-lg" href="/workshops">Workshops</Link>
        <Link className="text-lg" href="/board">eBoard</Link>
      </div>
    </nav>
  );
}
