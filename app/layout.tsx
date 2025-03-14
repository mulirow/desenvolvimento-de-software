import type { Metadata } from "next";
import localFont from "next/font/local";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-lexical/styles.css";
import "./globals.css";
import { Provider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arachwrite",
  description: "Transforme suas ideias em aventuras épicas! Descubra a plataforma que facilita a escrita de roteiros de jogos. Comece agora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
