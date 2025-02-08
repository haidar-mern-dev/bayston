"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname(); // Use `usePathname` to get the current path
  const isActive = (href: string) => pathname === href;
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-xl font-bold">
          BASTION-DATA
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className={`font-medium transition-colors hover:text-primary focus:text-primary ${
              isActive("/") ? "text-primary" : ""
            }`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors hover:text-primary focus:text-primary ${
              isActive("/about") ? "text-primary" : ""
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/jobs"
            className={`font-medium transition-colors hover:text-primary focus:text-primary ${
              isActive("/jobs") ? "text-primary" : ""
            }`}
          >
            JOBS
          </Link>
          <Link
            href="/companies"
            className={`font-medium transition-colors hover:text-primary focus:text-primary ${
              isActive("/companies") ? "text-primary" : ""
            }`}
          >
            COMPANIES
          </Link>
        </nav>
        <div className="hidden md:flex gap-6 justify-center text-center items-center ">
          <Link
            href="/tags"
            className="font-medium transition-colors hover:text-primary focus:text-primary underline"
          >
            REGISTER
          </Link>
          <Button size="default" className="bg-primary text-primary-foreground">
            SIGN IN
          </Button>
        </div>
      </div>
    </header>
  );
}
