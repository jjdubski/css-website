import Link from 'next/link';

export function Menu() {
  return (
    <nav className="flex justify-center">
      <div className="flex flex-row justify-between space-x-4">
        <Link className="text-lg" href="/">About</Link>
        <Link className="text-lg" href="/events">Events</Link>
        <Link className="text-lg" href="/workshops">Workshops</Link>
        <Link className="text-lg" href="/projects">Projects</Link>
        <Link className="text-lg" href="/eboard">eBoard</Link>
      </div>
    </nav>
  );
}
