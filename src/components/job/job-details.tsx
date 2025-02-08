import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JobDetailsProps {
  title: string;
  location: string;
  description: string[];
}

export function JobDetails({ title, location, description }: JobDetailsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <div className="font-semibold">Location:</div>
              <div className="text-muted-foreground">{location}</div>
            </div>
            <div>
              <div className="font-semibold">Description</div>
              <ul className="mt-2 space-y-2">
                {description.map((item, index) => (
                  <li key={index} className="flex gap-2 text-muted-foreground">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
