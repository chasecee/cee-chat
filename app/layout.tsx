import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

const title = "Chase Cee Chatbot";
const description = "Generate your next Twitter bio in seconds.";

export const metadata: Metadata = {
  metadataBase: new URL("https://twitterbio.io"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-black dark:text-white bg-white dark:bg-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
