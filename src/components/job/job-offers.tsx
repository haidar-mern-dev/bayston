import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@/types/job";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const JOBS: Job[] = [
  {
    id: "1",
    title: "DEVELOPPEUR WORDPRESS / PHP FULL STACK",
    location: "Boumerdes, Algeria",
    company: "Bastyon",
    contacted: true,
  },
  {
    id: "2",
    title: "DEVELOPPEUR JAVA",
    location: "Boumerdes, Algeria",
    company: "Bastyon",
    contacted: true,
  },
  {
    id: "3",
    title: "DEVELOPPEUR REACT/NODE FULL STACK",
    location: "Boumerdes, Algeria",
    company: "Bastyon",
    contacted: false,
  },
  {
    id: "4",
    title: "DEVELOPPEUR REACT/NODE FULL STACK",
    location: "Boumerdes, Algeria",
    company: "Bastyon",
    contacted: true,
  },
  {
    id: "5",
    title: "DEVELOPPEUR JAVA",
    location: "Boumerdes, Algeria",
    company: "Bastyon",
    contacted: false,
  },
];

export function JobOffers() {
  const company = JOBS[0].company;
  return (
    <div className="w-full space-y-4">
      <div className="space-y-3">
        {JOBS.map((job) => (
          <Card key={job.id} className="w-full shadow-sm">
            <CardContent className="flex items-center justify-between p-4">
              <div className="space-y-1">
                <h3 className="font-medium">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
              <div className="">
                <Badge
                  variant="outline"
                  className={
                    job.contacted
                      ? "text-green-500 border-green-500"
                      : "text-red-500 border-red-500"
                  }
                >
                  {job.contacted ? "Contacted" : "Not Contacted"}
                </Badge>
                <Button
                  variant="outline"
                  className="text-primary hover:text-primary hover:bg-primary/10 ml-2"
                  asChild
                >
                  <Link href={`/jobs/${job.id}`}>Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-start">
        <Button variant="link" className="text-primary p-0 h-auto" asChild>
          <Link href={`/companies/${company}`}>View all Offers</Link>
        </Button>
      </div>
    </div>
  );
}
