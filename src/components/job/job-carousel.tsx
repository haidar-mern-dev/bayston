"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the Job type
type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  postedAt: string; // Date stored as string in MM-DD-YYYY format
};

// Sample data with `postedAt` property
const jobs: Job[] = [
  {
    id: "1",
    title: "DEVELOPPEUR WORDPRESS / PHP FULL STACK",
    company: "Company A",
    location: "Boumerdes, Algeria",
    postedAt: "12-18-2024", // 2 days ago
  },
  {
    id: "2",
    title: "FRONTEND DEVELOPER",
    company: "Company B",
    location: "Paris, France",
    postedAt: "12-13-2024", // 7 days ago
  },
  {
    id: "3",
    title: "BACKEND ENGINEER",
    company: "Company C",
    location: "Berlin, Germany",
    postedAt: "12-09-2024", // More than a week ago
  },
  {
    id: "4",
    title: "UI/UX DESIGNER",
    company: "Company D",
    location: "London, UK",
    postedAt: "12-01-2024", // More than a week ago
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
  {
    id: "5",
    title: "DATA SCIENTIST",
    company: "Company E",
    location: "New York, USA",
    postedAt: "12-20-2024", // Today
  },
];

function timeSince(postedAt: string): string {
  const now = new Date();
  const postedDate = new Date(postedAt);
  const diffInDays = Math.floor(
    (now.getTime() - postedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays < 1) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  return postedDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

export default function AutoScrollingJobCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.setProperty("--scroll-duration", "60s");
      container.style.setProperty("--animation-play-state", "running");
    }
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
    containerRef.current?.style.setProperty("--animation-play-state", "paused");
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    containerRef.current?.style.setProperty(
      "--animation-play-state",
      "running"
    );
  };

  return (
    <div className="w-full overflow-hidden !mb-[6dvh]">
      <h1 className="text-3xl font-bold mb-4 text-left">Recent Jobs</h1>
      <div
        className="flex gap-4 animate-scroll"
        style={{
          animation: `scroll var(--scroll-duration) linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {jobs.map((job) => (
          <Card
            key={job.id}
            className="h-full flex-shrink-0 mx-1.5 min-w-[18dvw]"
          >
            <CardContent className="flex flex-col justify-between p-4 h-full">
              <div>
                <h2 className="text-sm font-semibold truncate">{job.title}</h2>
                <p className="text-xs text-gray-600 truncate">{job.company}</p>
                <p className="text-xs text-gray-600 truncate">{job.location}</p>
                <p className="text-xs text-primary font-bold italic mt-2">
                  Posted: {timeSince(job.postedAt)}
                </p>
              </div>
              <Button size="sm" variant="link" className="mt-2">
                <Link href={`/jobs/${job.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
