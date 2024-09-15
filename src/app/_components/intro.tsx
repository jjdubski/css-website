import Image from 'next/image'

export function Intro() {
  return (
    <section className="flex flex-row md:items-start mt-8">
      <Image
        src="/assets/logos/depaul-css-logo-transparent.png"
        width={150}
        height={150}
        alt="Computer Science Society Logo"
      />
      <div className="flex flex-col self-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        Computer Science Society
      </h1>
      <h3 className="text-2xl">@DePaul University, Chicago</h3>
      </div>
    </section>
  );
}
