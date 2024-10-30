import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.scss";
import { cx } from "@/src/utils";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import { siteMetaData } from "../utils/siteMetadata";
import { ThemeProvider } from "../Providers/ThemeProvider";
import { LayoutTransition } from "../components/ui/layoutTransition";
import { Toaster } from "@/src/components/ui/toaster";
import dynamic from "next/dynamic";

const NoSSRBeams = dynamic(() => import("../components/ui/background-beams"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-in",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-mr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title,
  },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: siteMetaData.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    creator: "@thekillingspre3",
    creatorId: "2480119958",
    images: [siteMetaData.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr",
          "container bg-background flex flex-col justify-center items-center overflow-x-hidden"
        )}
      >
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <div className="absolute top-0 left-0 right-0 overflow-x-hidden">
            <NoSSRBeams className="h-[140vh] md:h-[160vh] w-screen max-w-screen" />
          </div>
          <LayoutTransition>
            <main className="max-w-[1366px] px-[5%] md:px-16 pt-[100px] flex flex-col items-center justify-center">
              {children}
            </main>
          </LayoutTransition>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
