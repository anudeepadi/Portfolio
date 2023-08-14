import Image from "next/legacy/image";
import Link from "next/link";
import { Metadata } from "next";
import type { PostType } from "@/types";
import { getSinglePost } from "@/lib/sanity.query";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "../../components/shared/CustomPortableText";
import { BiChevronRight, BiCalendar, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import SharePost from "../../components/shared/SharePost";
import FeaturedPosts from "../../components/pages/FeaturedPosts";

type Props = {
  params: {
    post: string;
  };
};

const fallbackImage: string =
  "https://res.cloudinary.com/victoreke/image/upload/v1690824172/victoreke/og-project.png";

// Dynamic metadata for SEO
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params.post;
//   const post: ProjectType = await getSinglePost(slug);

//   return {
//     title: `${post.name}`,
//     metadataBase: new URL(`https://victoreke.com/projects/${post.slug}`),
//     description: post.tagline,
//     openGraph: {
//       images: post.coverImage?.image || fallbackImage,
//       url: `https://victoreke.com/projects/${post.slug}`,
//       title: post.name,
//       description: post.tagline,
//     },
//   };
// }

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug);

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <header className="relative flex items-center gap-x-2 border-b dark:border-zinc-800 border-zinc-200 pb-8">
        <Link href="/blog">Blog</Link>
        <BiChevronRight />
        <p className="text-zinc-400 text-sm truncate">{post.title}</p>
      </header>

      <section className="flex lg:flex-row flex-col relative">
        <article className="min-h-full lg:border-r border-r-0 dark:border-zinc-800 border-zinc-200 basis-3/4 pt-10 pb-4 lg:pr-6 px-0">
          <div className="flex items-center gap-x-4 text-md mb-8 dark:text-zinc-400 text-zinc-600">
            <div className="flex items-center gap-x-2">
              <BiCalendar />
              <p className="">
                {post._createdAt && formatDate(post._createdAt)}
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <BiTime />
              <p className="">5 min</p>
            </div>
          </div>
          <h1 className="md:text-5xl text-3xl mb-4">{post.title}</h1>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
            {post.description}
          </p>
          <div className="relative w-full h-40 pt-[52.5%] mt-12">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              layout="fill"
              src={post.coverImage.image || fallbackImage}
              alt={post.coverImage.alt || post.title}
              quality={100}
              placeholder={post.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={post.coverImage?.lqip || ""}
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed tracking-tight text-lg">
            <PortableText value={post.body} components={CustomPortableText} />
          </div>
        </article>

        <aside className="flex flex-col lg:max-h-full h-max gap-y-8 sticky top-2 bottom-auto right-0 basis-1/4 py-10 lg:px-6 px-0">
          <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
            <p className="dark:text-zinc-400 text-zinc-500 text-sm">
              Written By
            </p>
            <address className="flex items-center gap-x-3 mt-4 not-italic">
              <div className="relative w-12 h-12">
                <Image
                  src={post.author.photo.image}
                  alt={post.author.photo.alt}
                  layout="fill"
                  className="dark:bg-zinc-800 bg-zinc-300 rounded-full object-cover"
                />
              </div>
              <div rel="author">
                <h3 className="font-semibold text-lg tracking-tight">
                  {post.author.name}
                </h3>
                <a
                  href={post.author.twitterUrl}
                  className="text-blue-500 text-sm"
                  rel="noreferrer noopener"
                >
                  {`@${post.author.twitterUrl.split("twitter.com/")[1]}`}
                </a>
              </div>
            </address>
          </section>

          <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
            <h3 className="text-xl font-semibold tracking-tight mb-4">Tags</h3>
            <ul className="flex flex-wrap items-center gap-2 tracking-tight">
              {post.tags.map((tag, id) => (
                <li
                  key={id}
                  className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          <SharePost
            title={post.title}
            url={`https://victoreke.vercel.app/${post.slug}`} // TODO: Update url to victoreke.com
          />

          <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              Featured
            </h3>
            <FeaturedPosts params={params.post} />
          </section>
        </aside>
      </section>

      <footer className="mt-8 md:px-0">
        Newsletter form will show up here!
      </footer>
    </main>
  );
}