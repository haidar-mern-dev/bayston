"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function CompanySearchForm() {
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { company, location });
    // Implement your search logic here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-left">Search for companies</CardTitle>
      </CardHeader>
      <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="relative flex-grow">
            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-8"
            />
          </div>
          <Button type="submit" className="bg-primary text-primary-foreground">
            Search
          </Button>
        </CardContent>
      </form>
    </Card>
  );
}
