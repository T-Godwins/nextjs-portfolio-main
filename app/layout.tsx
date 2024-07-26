import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import GoogleAnalytics from './components/GoogleAnalytics';


export const metadata: Metadata = {
  title: {
    default: "Godwins' Portfolio",
    template: "%s | godwins.site",
  },
  description: "Welcome to my portfolio. ",
  openGraph: {
    title: "godwins.site",
    description:
      "Data and Information Fellow at Wofford College and Software Engineering Fellow at Headstarter.",
    url: "https://godwins.site",
    siteName: "godwins.site",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/siteLogo.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      <GoogleAnalytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}