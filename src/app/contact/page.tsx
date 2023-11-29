import Image from "next/image";

import { LinkButton } from "@/components";
import Hero from "public/hero.jpg";

export default function Contact() {
  const input =
    "border-2 resize-none border-stone-800 bg-transparent p-5 font-bold border-opacity-60";

  return (
    <main>
      <h1 className="mb-10 text-6xl">Let&apos;s Keep in Touch</h1>
      <div className="flex h-[66vh] items-center gap-24">
        <form className="flex flex-col gap-5">
          <input type="text" placeholder="name" className={input} />
          <input type="text" placeholder="email" className={input} />
          <textarea
            className={input}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <LinkButton
            className="w-full rounded-sm bg-emerald-500 p-4 text-white"
            href="#"
          >
            Send
          </LinkButton>
        </form>
        <div className="flex flex-col justify-between">
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptas itaque nisi iusto temporibus vel autem sapiente maxime
            maiores voluptate consectetur recusandae quasi molestias aut labore,
            modi natus ea ipsum?
          </p>
          <Image src={Hero} alt="hero image" className="max-h-[40vh]" />
        </div>
      </div>
    </main>
  );
}
