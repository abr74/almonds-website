import type { Metadata } from "next";
import "./globals.css";
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";



export const metadata: Metadata = {
  title: "Raymond Yu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
