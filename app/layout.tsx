import Nav from "./auth/Nav";
import "./globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Chirp",
  description:
    "A platform for short, sweet posts using Next.js 13, Prisma & Tailwind CSS",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body
        className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} font-sans bg-[#ECF2FF]`}
      >
        {/* @ts-expect-error Server Component */}
        <Nav />
        {children}
      </body>
    </html>
  );
}
