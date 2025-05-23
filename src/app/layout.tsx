import type { Metadata } from "next";

import { mainFont } from "@/config/fonts";
import { MenuBar, Footer } from "@/components";
import { getCompany } from "@/lib/api/company";
import Providers from "./providers";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Duy Vu Ink - Tattoo Studio",
  description: "Tattoo Studio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   const company = await getCompany();

  return (
    <html lang="en" className="dark">
      <body className={mainFont.className}>
        {/* <Providers initialData={company}> */}
        <MenuBar />
        {children}
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
