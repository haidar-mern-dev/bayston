import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full bg-[#F2F6FD] text-[#05264E] pb-2">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              BASTION-DATA
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="link"
                size="icon"
                asChild
                className="text-[#05264E] hover:text-[#05264E]/80"
              >
                <Link href="https://linkedin.com">
                  {/* <Linkedin className="h-5 w-5" /> */}
                  <img src="/footericon/linkdin.svg" alt="linkdin" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="link"
                size="icon"
                asChild
                className="text-[#05264E] hover:text-[#05264E]/80"
              >
                <Link href="https://facebook.com">
                  {/* <Facebook className="h-5 w-5" /> */}
                  <img src="/footericon/facebook.svg" alt="facebook" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                variant="link"
                size="icon"
                asChild
                className="text-[#05264E] hover:text-[#05264E]/80"
              >
                <Link href="https://instagram.com">
                  {/* <Instagram className="h-5 w-5" /> */}
                  <img src="/footericon/insta.svg" alt="insta" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-sm text-[#05264E]/80">
              {/* <Mail className="h-4 w-4" /> */}
              <img src="/footericon/mail.svg" alt="mail" />

              <Link
                href="mailto:info@bastion-data.com"
                className="hover:text-[#05264E]"
              >
                info@bastion-data.com
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#05264E]/80">
              <Link href="/privacy" className="hover:text-[#05264E]">
                Privacy policy
              </Link>
              <Separator orientation="vertical" className="h-4 bg-white/20" />
              <Link href="/privacy" className="hover:text-[#05264E]">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center ">© 2024 BASTION-DATA . All Rights Reserved.</p>
    </footer>
  );
}
