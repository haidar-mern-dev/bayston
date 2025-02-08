"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Job } from "@/types/job";
import Link from "next/link";

// interface JobCardProps {
//   job: Job;
// }

interface JobItem {
  Job: {
    id: string; // Unique identifier for the job item
    title: string; // Title of the job position
    company: string; // Company name
    location: string; // Job location
    description: string; // An array of descriptions for the job
  };
  JobTag: {
    id: number;
    created_at: string; // ISO 8601 date string, e.g., "2025-01-03T06:57:27.495150"
    tag_id: number;
    job_id: number;
    updated_at: string;
  };
}

export function JobCard(job: JobItem) {
  console.log(job);

  return (
    <Card className="overflow-hidden bg-white ">
      <CardContent className="grid gap-4 p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-lg border bg-muted">
            <div className="h-full w-full bg-muted" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold">{job.Job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.Job.location}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-purple-600">{job.Job.company}</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Description</h4>
          <ul className="list-inside space-y-2 text-sm text-muted-foreground">
            {/* <li key={index} className="flex gap-2"> */}
            {/* <span className="text-muted-foreground">•</span>
                {job.Job.description} */}
            {/* </li> */}
            {job.Job.description &&
              JSON.parse(job.Job.description).map(
                (item: string, index: number) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-muted-foreground">•</span>
                    {item}
                  </li>
                )
              )}
          </ul>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              window.location.href = `/jobs/${job.Job.id}`;
            }}
            variant="outline"
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            <Link href={`/jobs/${job.Job.id}`}>Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
