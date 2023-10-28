import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import incognito from "./font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Anudeep Adiraju - Software Developer",
  description:
    "Anudeep Adiraju is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://anudeepadi.vercel.app/",
  ogImage:
    "https://res.cloudinary.com/dltqi2xt8/image/upload/v1698493723/rjkqydvhlky7dk4uaxwj.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "victoreke.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  themeColor: "#33E092",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        async
        src="https://statsvictor.vercel.app/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ""}
      />
    </html>
  );
}
