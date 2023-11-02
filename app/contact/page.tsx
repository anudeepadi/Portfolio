// A Contact Me page
// @ts-ignore
import React from "react";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Heroes from "../components/pages/Heroes";

import { Slide } from "../animation/Slide";
import { getProfile } from "@/lib/sanity.query";
import { ProfileType } from "@/types";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  title: "Contact | Victor Eke",
  metadataBase: new URL("https://victoreke.com/app/contact"),
  description: "Get in touch with me",
  openGraph: {
    title: "Contact | Victor Eke",
    url: "https://victoreke.com/app/contact",
    description: "Get in touch with me",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635149/victoreke/photos.png",
  },
};

export default function Contact({ profile }: { profile: ProfileType[] }) {
    return (
        <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
        {profile &&
            profile.map((data) => (
            <div key={data._id}>
                <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
                <div className="order-2 lg:order-none">
                    <Slide>
                    <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                        I&apos;m {data.fullName}. I live in {data.location}, where I
                        build the future.
                    </h1>
    
                    <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                        <PortableText
                        //@ts-ignore
                        value={data.fullBio}
                        components={CustomPortableText}
                        />
                    </div>
                    </Slide>
                </div>
    
                <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                    <Slide delay={0.1}>
                    <div className="sticky top-10">
                        <img
                        className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                        src={data.profileImage.image}
                        alt={data.profileImage.alt}
                        />
                    </div>
                    </Slide>
    
                    <Slide delay={0.2}>
                    <div className="flex flex-col gap-y-4">
                        <h3 className="font-incognito font-black text-2xl">
                        Contact
                        </h3>
    
                        <div className="flex flex-col gap-y-2">
                        <a
                            href={`mailto:${data.email}`}
                            className="flex items-center gap-x-3"
                        >
                            <BiEnvelope className="text-2xl" />
                            <span className="font-incognito font-black text-xl">
                            {data.email}
                            </span>
                        </a>

                    </div>
                    </Slide>
                </aside>
                </section>
            </div>
            ))}
        </main>
    );
}

export async function getStaticProps() {
    const profile = await getProfile();
  
    return {
      props: {
        profile,
      },
      revalidate: 1,
    };
  } 

  