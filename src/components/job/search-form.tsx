"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Search,
  Building2,
  MapPin,
  Filter,
  Check,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { any } from "zod";

import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css";

const availableTags = [
  { value: "frontend-developer", label: "Frontend Developer" },
  { value: "backend-developer", label: "Backend Developer" },
  { value: "full-stack-engineer", label: "Full Stack Engineer" },
  { value: "product-manager", label: "Product Manager" },
  { value: "internship", label: "Internship" },
];

interface FormInputs {
  job: string;
  company: string;
  location: string;
  date: string;
  tags: string[];
}

interface Tag {
  value: number;
  label: string;
}

interface TagApi {
  id: number; // Unique identifier for the tag
  name: string; // Name of the tag
  created_at: string; // Timestamp when the tag was created (ISO 8601 format)
  updated_at: string; // Timestamp when the tag was last updated (ISO 8601 format)
}

export default function SearchForm({ onSearch }: { onSearch: Function }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);

  // Loading state to show a spinner or message
  const [loading, setLoading] = useState<boolean>(false);
  // Error state to handle and show any issues fetching the data
  const [error, setError] = useState<string | null>(null);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleRangeChange = (ranges: RangeKeyDict) => {
    setRange([
      {
        startDate: ranges.selection.startDate || new Date(),
        endDate: ranges.selection.endDate || new Date(),
        key: "selection",
      },
    ]);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/tags`)
          .then((response) => {
            if (response.statusText == "OK") {
              let tags: { value: number; label: string }[] = [];
              response.data.items.forEach((item: TagApi) => {
                tags.push({
                  value: item.id,
                  label: item.name,
                });
              });

              setTags(tags);
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

    // fetchJobs();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      job: "",
      company: "",
      location: "",
      tags: [],
    },
  });

  const selectedTags = watch("tags") || [];

  const toggleTag = (value: string) => {
    const currentTags = selectedTags;
    const newTags = currentTags.includes(value)
      ? currentTags.filter((tag) => tag !== value)
      : [...currentTags, value];

    setValue("tags", newTags, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      "tags",
      selectedTags.filter((tag) => tag !== tagToRemove),
      { shouldValidate: true }
    );
  };

  const onSubmit = (data: FormInputs) => {
    console.log("Form submitted:", data);
    onSearch(data);
    // Handle form submission
  };

  const handleClear = () => {
    reset();
    onSearch({
      job: "",
      company: "",
      location: "",
      tags: [],
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Card className="bg-white ">
        <CardHeader className="px-4 pb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your Search</h2>
            <Button
              type="button"
              variant="link"
              className="h-auto p-0 text-sm text-muted-foreground"
              onClick={handleClear}
            >
              clear
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 px-4">
          {/* Job Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Job Title *</label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                {...register("job", { required: "Job title is required" })}
                placeholder="Search by Job title"
                className={cn(" pl-8", errors.job && "border-red-500")}
              />
            </div>
            {errors.job && (
              <p className="text-sm text-red-500">{errors.job.message}</p>
            )}
          </div>

          {/* Company Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Company *</label>
            <div className="relative">
              <Building2 className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                {...register("company", {
                  required: "Company name is required",
                })}
                placeholder="Search by company"
                className={cn(" pl-8", errors.company && "border-red-500")}
              />
            </div>
            {errors.company && (
              <p className="text-sm text-red-500">{errors.company.message}</p>
            )}
          </div>

          {/* Location Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Location *</label>
            <div className="relative">
              <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                {...register("location", { required: "Location is required" })}
                placeholder="Search by location"
                className={cn(" pl-8", errors.location && "border-red-500")}
              />
            </div>

            {errors.location && (
              <p className="text-sm text-red-500">{errors.location.message}</p>
            )}
          </div>

          {/* Date Posted Search */}
          <div className="space-y-2">
            <DateRange
              onChange={handleRangeChange}
              ranges={range}
              rangeColors={["#4f46e5"]}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              className="max-w-xs bg-background"
            />
            {/* <DateRangePicker
              className="max-w-xs bg-background"
              label="Stay duration"
            /> */}
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>

          {/* Tag Search */}
          {/* Tag Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Tags *</label>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className={cn(
                    "w-full justify-between bg-white pl-2",
                    errors.tags && "border-red-500"
                  )}
                >
                  {selectedTags.length > 0
                    ? `${selectedTags.length} tag${
                        selectedTags.length === 1 ? "" : "s"
                      } selected`
                    : "Select tags..."}
                  <Filter className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search tags..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>
                      <div className="flex flex-col items-center justify-center">
                        No tags found.
                        <Button variant="link" className="text-primary">
                          <Link href={"/tags"}>Create a new tag</Link>
                        </Button>
                      </div>
                    </CommandEmpty>
                    <CommandGroup>
                      <CommandItem
                        value="selectAll"
                        onSelect={() => {
                          if (selectedTags.length === tags.length) {
                            // Deselect all tags
                            setValue("tags", [], { shouldValidate: true });
                          } else {
                            // Select all tags
                            setValue(
                              "tags",
                              tags.map((tag) => tag.value.toString()),
                              { shouldValidate: true }
                            );
                          }
                          setPopoverOpen(false);
                        }}
                      >
                        {selectedTags.length === tags.length
                          ? "Deselect All"
                          : "Select All"}
                      </CommandItem>
                      {tags.map((tag) => (
                        <CommandItem
                          key={tag.value}
                          value={tag.value.toString()}
                          onSelect={() => {
                            toggleTag(tag.value.toString());
                            setPopoverOpen(false);
                          }}
                        >
                          {tag.label}
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              selectedTags.includes(tag.value.toString())
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {errors.tags && (
              <p className="text-sm text-red-500">{errors.tags.message}</p>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedTags.map((tag) => {
                const tagLabel =
                  tags.find((t) => t.value.toString() === tag)?.label || tag;
                return (
                  <span
                    key={tag}
                    className="flex items-center px-3 py-1 text-sm font-medium text-white bg-primary rounded-full"
                  >
                    {tagLabel}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-white hover:text-gray-200"
                    >
                      ✕
                    </button>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground"
          >
            Search
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
