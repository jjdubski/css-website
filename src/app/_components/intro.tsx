import Image from 'next/image'

export function Intro() {
  return (
    <section className="flex flex-row justify-center items-center mt-8">
      <Image
        src="/assets/logos/depaul-css-logo-transparent.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="Computer Science Society Logo"
        style={{ width: 'auto', height: '120px' }}
      />
      <div className="flex flex-col self-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        Computer Science Society
      </h1>
      <h3 className="text-2xl mt-2">@DePaul University, Chicago</h3>
      </div>
    </section>
  );
}
