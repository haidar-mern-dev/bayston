"use client";
import { CompanyHeader } from "@/components/job/header";
import { JobDetails } from "@/components/job/job-details";
import { ContactCard } from "@/components/job/contact-card";
import { useEffect,useState } from "react";
import axios from 'axios';

// import { useRouter } from 'next/router';


interface JobItem {
  Job: {
    id: string; // Unique identifier for the job item
    title: string; // Title of the job position
    company: string; // Company name
    location: string; // Job location
    description: string; // An array of descriptions for the job
  }, JobTag: {
    id: number;
    created_at: string; // ISO 8601 date string, e.g., "2025-01-03T06:57:27.495150"
    tag_id: number;
    job_id: number;
    updated_at: string;
  }
}


const COMPANY_DATA = {
  name: "Company Name",
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

export default function JobDetailsPage(params) {

  // const router = useRouter();
  
  // const { id } = router.query;

  const [job, setJob] = useState<JobItem>();

  const [error, setError] = useState<string | null>(null);

  const id = params.params.jobId;
  console.log(params.params);
  

  const fetchJob = async (id:number) => {

    try {
      
      axios.get(`http://127.0.0.1:8000/jobs/${id}`,).then((response) => {

        if (response.statusText == 'OK') {
          setJob(response.data);
        } else {
          alert('Something Went Wrong !');
        }

        // console.log(response);

      }).catch(() => {
        alert('Something Went Wrong ! Error Fetching Records !');

      });

    } catch (error) {
      alert('Something Went Wrong !');
      console.error(error);
      // alert(error)
    }

  }

  useEffect(() => {
    alert('I am called !')
    fetchJob(id);

  }, []);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto p-6">
        <div className="space-y-8">
          <CompanyHeader
            name={COMPANY_DATA.name}
            location={COMPANY_DATA.location}
            tagline={COMPANY_DATA.tagline}
          />
          <div className="grid gap-6 md:grid-cols-[1fr,300px]">
            <JobDetails
              title={COMPANY_DATA.jobTitle}
              location={COMPANY_DATA.location}
              description={COMPANY_DATA.description}
            />
            <div>
              <ContactCard {...COMPANY_DATA.contact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
