import Link from "next/link";
import Image from "next/image";

import Hero from "public/hero.jpg";

export default function Portfolio() {
  const title =
    "absolute bottom-2 right-2 bg-[#164863] bg-opacity-60 p-2 text-4xl font-bold text-white";
  const item = "relative h-[400px] w-[300px]";

  return (
    <main className="mt-[-100px]">
      <h1 className="text-8xl">Our Works</h1>
      <h2 className="my-10 text-4xl">Choose gallery</h2>
      <div className="flex gap-12">
        <Link href="/portfolio/illustrations" className={item}>
          <Image src={Hero} alt={""} className={item} />
          <span className={title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={item}>
          <Image src={Hero} alt={""} className={item} />
          <span className={title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={item}>
          <Image src={Hero} alt={""} className={item} />
          <span className={title}>Application</span>
        </Link>
      </div>
    </main>
  );
}
