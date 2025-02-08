import { CompanyHeader } from "@/components/company/company-header";
import { JobDetails } from "@/components/job/job-details";
import { ContactCard } from "@/components/job/contact-card";
import { JobOffers } from "@/components/job/job-offers";

const COMPANY_DATA = {
  name: "Sonatrach",
  location: "Boumerdes Algeria",
  tagline:
    "Starting a community doesn't need to be complicated, but how do you get started?",
  jobTitle: "DEVELOPPEUR WORDPRESS / PHP FULL STACK",
  description: [
    "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    "Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula. Pellentesque Sed Sapien Accumsan.",
    "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
    "Duis Blandit Pellentesque Diam, Ut Consequat Sem Venenatis Sed.",
    "Sed Id Felis Ac Neque Hendrerit Aliquet In Sit Amet Est. In Tincidunt Gravida Bibendum.",
    "Duis Tincidunt Dui Ante, Luctus Dignissim Velit Congue Ac. Curabitur Eget Magna Facilisis Erat Dignissim Blandit Sed A Dui.",
    "Phasellus Suscipit Lectus Enim, Non Posuere Massa Sollicitudin Sit Amet. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per Inceptos Himenaeos.",
    "Mauris Malesuada, Urna Id Tempor Sagittis, Quam Leo Fringilla Tellus, Interdum Vehicula Tortor Sem Et Felis. Morbi Gravida Enim Nec Fermentum Efficitur.",
    "Nam Pharetra Mollis Pretium. Pellentesque Aliquet, Quam Dignissim Tempor Lacinia, Tortor Neque Pellentesque Risus, Ut Congue Felis Leo Sed Lacus.",
  ],
  contact: {
    email: "contact@companyA.com",
    phone: "+213999999999",
    location: "Boumerdes, Algeria",
    website: "www.company.com",
  },
};

export default function JobDetailsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto p-6">
        <div className="space-y-8">
          <CompanyHeader
            name={COMPANY_DATA.name}
            location={COMPANY_DATA.location}
            tagline={COMPANY_DATA.tagline}
          />
          <h2 className="text-xl font-semibold">Job Offers</h2>
          <div className="grid gap-6 md:grid-cols-[1fr,300px]">
            <div className="">
              <JobOffers />
            </div>
            <div>
              <ContactCard {...COMPANY_DATA.contact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
