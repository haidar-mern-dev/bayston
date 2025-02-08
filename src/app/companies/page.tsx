import { SearchForm } from "@/components/job/search-form";
import { CompanyCard } from "@/components/company/company-card";
import { CompanySearchForm } from "@/components/company/company-search";
import { companies } from "@/data/companies";

export default function CompanySearch() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <CompanySearchForm />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            company={{ ...company, id: String(index + 1) }}
          />
        ))}
      </div>
      <div className="mt-8">
        {/* <Pagination
          currentPage={1}
          totalPages={3}
          onPageChange={(page) => console.log(`Navigate to page ${page}`)}
        /> */}
      </div>
    </div>
  );
}
