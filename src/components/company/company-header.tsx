import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

interface CompanyHeaderProps {
  name: string;
  location: string;
  tagline: string;
  logo?: string;
}

export function CompanyHeader({
  name,
  location,
  tagline,
  logo,
}: CompanyHeaderProps) {
  return (
    <div>
      <div className="h-[22dvh] w-full bg-primary/30 -mt-6 rounded-md" />
      <div className="container px-6 ">
        <div className="-mt-16 flex items-start gap-6">
          <Card className="mb-6 h-36 w-36 overflow-hidden rounded-lg border-2 border-primary/20">
            {logo ? (
              <Image
                src={logo}
                alt={`${name} logo`}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-background" />
            )}
          </Card>
          <div className="space-y-2 pt-16 mt-2">
            <div className="text-sm text-primary">{location}</div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <p className="text-muted-foreground">{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
