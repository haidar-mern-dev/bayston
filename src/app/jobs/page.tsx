"use client";
import SearchForm from "@/components/job/search-form";
import { JobCard } from "@/components/job/job-card";
import { Pagination } from "@/components/job/pagination";
import JobCarousel from "@/components/job/job-carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const MOCK_JOBS: JobItem[] = [
  {
    Job: {
      id: "1",
      title: "DEVELOPPEUR WORDPRESS / PHP FULL STACK",
      company: "Company A",
      location: "Boumerdes, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 1,
      created_at: "2025-01-03T06:57:27.495150",
      tag_id: 101,
      job_id: 1,
      updated_at: "2025-01-03T06:57:27.495150",
    },
  },
  {
    Job: {
      id: "2",
      title: "FRONTEND DEVELOPER - REACT",
      company: "Company B",
      location: "Algiers, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 2,
      created_at: "2025-01-03T08:00:00.123456",
      tag_id: 102,
      job_id: 2,
      updated_at: "2025-01-03T08:00:00.123456",
    },
  },
  {
    Job: {
      id: "3",
      title: "BACKEND DEVELOPER - NODE.JS",
      company: "Company C",
      location: "Oran, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 3,
      created_at: "2025-01-03T09:15:45.789012",
      tag_id: 103,
      job_id: 3,
      updated_at: "2025-01-03T09:15:45.789012",
    },
  },
  {
    Job: {
      id: "4",
      title: "DATA ANALYST",
      company: "Company D",
      location: "Tlemcen, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 4,
      created_at: "2025-01-03T10:30:00.654321",
      tag_id: 104,
      job_id: 4,
      updated_at: "2025-01-03T10:30:00.654321",
    },
  },
  {
    Job: {
      id: "5",
      title: "UI/UX DESIGNER",
      company: "Company E",
      location: "Setif, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 5,
      created_at: "2025-01-03T11:45:33.987654",
      tag_id: 105,
      job_id: 5,
      updated_at: "2025-01-03T11:45:33.987654",
    },
  },
  {
    Job: {
      id: "1",
      title: "DEVELOPPEUR WORDPRESS / PHP FULL STACK",
      company: "Company A",
      location: "Boumerdes, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 1,
      created_at: "2025-01-03T06:57:27.495150",
      tag_id: 101,
      job_id: 1,
      updated_at: "2025-01-03T06:57:27.495150",
    },
  },
  {
    Job: {
      id: "2",
      title: "FRONTEND DEVELOPER - REACT",
      company: "Company B",
      location: "Algiers, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 2,
      created_at: "2025-01-03T08:00:00.123456",
      tag_id: 102,
      job_id: 2,
      updated_at: "2025-01-03T08:00:00.123456",
    },
  },
  {
    Job: {
      id: "3",
      title: "BACKEND DEVELOPER - NODE.JS",
      company: "Company C",
      location: "Oran, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 3,
      created_at: "2025-01-03T09:15:45.789012",
      tag_id: 103,
      job_id: 3,
      updated_at: "2025-01-03T09:15:45.789012",
    },
  },
  {
    Job: {
      id: "4",
      title: "DATA ANALYST",
      company: "Company D",
      location: "Tlemcen, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 4,
      created_at: "2025-01-03T10:30:00.654321",
      tag_id: 104,
      job_id: 4,
      updated_at: "2025-01-03T10:30:00.654321",
    },
  },
  {
    Job: {
      id: "5",
      title: "UI/UX DESIGNER",
      company: "Company E",
      location: "Setif, Algeria",
      description: JSON.stringify([
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Proin Ac Massa Et Elit Aliquam Iaculis Ut Eget Ligula.",
        "Pellentesque Sed Sapien Accumsan, Posuere Libero Non, Condimentum Sem.",
        "Suspendisse Suscipit Tempus Orci Quis Consectetur.",
        "Aenean Molestie Felis Nisl, Viverra Molestie Felis Facilisis Nec. Praesent Egestas Ipsum Quis Tempus Facilisis.",
      ]),
    },
    JobTag: {
      id: 5,
      created_at: "2025-01-03T11:45:33.987654",
      tag_id: 105,
      job_id: 5,
      updated_at: "2025-01-03T11:45:33.987654",
    },
  },
];

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

interface FormInputs {
  job: string;
  company: string;
  location: string;
  tags: string[];
}

export default function JobSearch() {
  const changePage = async (page: number) => {
    setCurrentPage(page);
    // fetchJobs();
  };

  const [searchFilters, setSearchFilters] = useState<FormInputs>({
    job: "",
    company: "",
    location: "",
    tags: [],
  });

  const applySearch = async (form: FormInputs) => {
    setSearchFilters(form);
  };

  const [jobs, setJobs] = useState<JobItem[]>();

  const [totalPages, setTotalPages] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState<number>(1);

  // Loading state to show a spinner or message
  const [loading, setLoading] = useState<boolean>(false);
  // Error state to handle and show any issues fetching the data
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async () => {
    try {
      let skip = (currentPage - 1) * 10;

      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/jobs?skip=${skip}&search_company=${searchFilters.company}&search_job=${searchFilters.job}&search_location=${searchFilters.location}&tags=${searchFilters.tags}`
        )
        .then((response) => {
          if (response.statusText == "OK") {
            setJobs(response.data.items);
            setTotalPages(response.data.pages);
          } else {
            alert("Something Went Wrong !");
          }

          // console.log(response);
        })
        .catch(() => {
          alert("Something Went Wrong ! Error Fetching Records !");
        });
    } catch (error) {
      console.error(error);
      // alert(error)
    }
  };

  useEffect(() => {
    setJobs(MOCK_JOBS);
  }, [currentPage, searchFilters]);

  return (
    <div className="container mx-auto p-4 md:p-6 ">
      {/* <JobCarousel /> */}

      <div className="grid gap-6 md:grid-cols-[300px,1fr]">
        <aside>
          <SearchForm onSearch={applySearch} />
        </aside>
        <main className="space-y-6">
          <div className="mb-4">
            <h1 className="text-sm text-muted-foreground">
              8 Search Results For
            </h1>
            <p className="font-medium">Developer, Boumerdes, Algeria</p>
          </div>
          {jobs?.map((job) => (
            <JobCard Job={job.Job} JobTag={job.JobTag} />
          ))}
          <Pagination
            onPageChange={changePage}
            currentPage={currentPage}
            totalPages={totalPages}
            // onPageChange={(page) => console.log(`Navigate to page ${page}`)}
          />
        </main>
      </div>
    </div>
  );
}
