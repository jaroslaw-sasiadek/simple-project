import { LinkButton } from "@/components";
import Image from "next/image";

import Hero from "public/hero.jpg";

export default function About() {
  return (
    <main className="mt-[-40px]">
      <div className="relative h-72 w-full">
        <Image src={Hero} fill={true} alt="" className="object-cover" />
        <div className="absolute bottom-4 left-4 bg-[#164863] bg-opacity-60 p-2 text-4xl font-bold text-white">
          <h1 className="mb-2 text-7xl">Lorem ipsum, dolor!</h1>
          <h2>Animi quibusdam cum omnis officiis voluptatum quo?</h2>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="mt-[50px] flex flex-1 flex-col gap-8">
          <h1 className="text-4xl font-bold">Who Are We?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="mt-[50px] flex flex-1 flex-col gap-8">
          <h1 className="text-4xl font-bold">What We Do?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <LinkButton
            className="rounded-sm bg-emerald-500 p-4 text-white"
            href="/contact"
          >
            Contact
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
