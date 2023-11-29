"use client";

import { notFound, useParams } from "next/navigation";

export default function Category() {
  let params = useParams();

  if (
    params.category !== "illustrations" &&
    params.category !== "websites" &&
    params.category !== "applications"
  ) {
    params.category = ["not found"];
  }

  return (
    <main className="mt-[-600px] flex">
      <span className="text-6xl">Category: {params.category}</span>
    </main>
  );
}
