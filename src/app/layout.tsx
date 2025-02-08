import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignInButton, SignedOut } from "@clerk/nextjs";

import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BastionAI",
  description: "AI-powered chat and document management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            "flex min-h-screen w-full flex-col bg-background"
          )}
        >
          <div>
            <Navbar />
            {/* <SignedOut>
              <SignInButton />
            </SignedOut> */}
          </div>
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
