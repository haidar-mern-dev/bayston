import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { CompanyDetails } from "@/types/company";

interface CompanyCardProps {
  company: CompanyDetails;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="overflow-hidden transition-colors hover:bg-muted/50">
      <Link href={`/companies/${company.id}`}>
        <CardContent className="p-0">
          <div className="aspect-[4/3] w-full">
            <Image
              src={company.imageUrl}
              alt={`${company.name} office`}
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2 p-4">
            <div className="text-sm text-primary">{company.location}</div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <ArrowUpRight className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">{company.tagline}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
