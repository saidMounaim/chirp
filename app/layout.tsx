import "./globals.css";

export const metadata = {
  title: "Chirp",
  description:
    "A platform for short, sweet posts using Next.js 13, Prisma & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
