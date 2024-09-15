// METADATA
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Computer Science Society @DePaul`
};

// COMPONENTS
import { Intro } from "@/app/_components/intro";
import { Menu } from "@/app/_components/menu";
import Footer from "@/app/_components/footer";

// CONTENT CONTAINERS
import Container from "@/app/_components/container";
import Subcontainer from "@/app/_components/subcontainer";

// STYLESHEET
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/logos/depaul-css-logo-transparent.png" />
      </head>
      <body className="bg-stone-100">
        <Container>
          <Intro />
          <Menu />
          <Subcontainer>
            <main className="min-h-screen">{children}</main>
          </Subcontainer>
        </Container>
      </body>
    </html>
  );
}
