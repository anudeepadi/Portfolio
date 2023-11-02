import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";

const images = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1698925376808-2b3806e6244c?auto=format&fit=crop&q=80&w=2535&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1698931698106-a4ea87ff9420?auto=format&fit=crop&q=80&w=2535&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1698925489947-690b512993c7?auto=format&fit=crop&q=80&w=2535&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const metadata: Metadata = {
  title: "Photos | Anudeep Adiraju",
  metadataBase: new URL("https://anudeepadi.vercel.app/photos"),
  description: "Explore photos taken by Anudeep Adiraju",
  openGraph: {
    title: "Photos | Anudeep Adiraju",
    url: "",
    description: "Explore photos taken by Anudeep Adiraju",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635149/victoreke/photos.png",
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <div className="lg:max-w-2xl max-w-2xl">
        <Slide>
          <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-3 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            Photos
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            This page is still under construction...
          </p>
        </Slide>
      </div>
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}
