import Image from "next/image";
import { Card } from "@/components/ui/card";

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
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <Card className="h-32 w-32 overflow-hidden rounded-lg border-2 border-primary/20">
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
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">{location}</div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-muted-foreground">{tagline}</p>
        </div>
      </div>
    </div>
  );
}
