import Image from "next/image";

import { LinkButton } from "@/components";
import Hero from "public/hero.jpg";

export default function Home() {
  return (
    <main className="mt-[-100px] flex items-center gap-24">
      <div className="flex flex-1 flex-col gap-12">
        <h1 className="text-7xl">Lorem ipsum dolor sit amet elitis.</h1>
        <p className="text-2xl font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ad
          quam molestias voluptate assumenda eum culpa minus.
        </p>
        <LinkButton
          className="rounded-sm bg-emerald-500 p-4 text-white"
          href="/portfolio"
        >
          See Our Works
        </LinkButton>
      </div>
      <div className="flex-1">
        <Image src={Hero} alt="hero image" className="h-full w-full" />
      </div>
    </main>
  );
}
