import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

interface ContactCardProps {
  email: string;
  phone: string;
  location: string;
  website: string;
}

export function ContactCard({
  email,
  phone,
  location,
  website,
}: ContactCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <a href={`mailto:${email}`} className="text-sm hover:underline">
            {email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <a href={`tel:${phone}`} className="text-sm hover:underline">
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            {website}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
