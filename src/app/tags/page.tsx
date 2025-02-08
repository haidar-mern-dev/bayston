"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import * as ActivityCodesData from "@/data/s.json";
import axios from 'axios';

interface Tag {
  name: string;
  activityCodes: string[];
}

export default function TagSystem() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [newTag, setNewTag] = useState("");
  const [selectedActivityCodes, setSelectedActivityCodes] = useState<string[]>(
    []
  );
  const [selectCode, setSelectCode] = useState<string | null>(null);
  const [expandedTag, setExpandedTag] = useState<string | null>(null);

  const addActivityCode = (code: string) => {
    if (!selectedActivityCodes.includes(code))
      setSelectedActivityCodes([...selectedActivityCodes, code]);
    setSelectCode(code);
  };
  const removeActivityCode = (code: string) => {
    setSelectedActivityCodes(selectedActivityCodes.filter((c) => c !== code));
    setSelectCode(code);
  };

  const handleCreateTag = () => {
    if (newTag.trim() && selectedActivityCodes.length > 0) {
      
      try {

  
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/tags`,{ name: newTag.trim(), activityCodes: selectedActivityCodes }).then((response) => {
          alert(response.statusText)
          if (response.statusText == 'Created') {
            setTags([
              ...tags,
              { name: newTag.trim(), activityCodes: selectedActivityCodes },
            ]);
            setNewTag("");
            setSelectedActivityCodes([]);
          } else {
            alert('Something Went Wrong !');
          }
  
          // console.log(response);
  
        }).catch(() => {
          alert('Something Went Wrong ! Error Fetching Records !');
  
        });
  
      } catch (error) {
        console.error(error);
        // alert(error)
      }
      
      
    }
  };

  const handleClear = () => {
    setNewTag("");
    setSelectedActivityCodes([]);
  };

  const toggleExpandTag = (tagName: string) => {
    setExpandedTag(expandedTag === tagName ? null : tagName);
  };

  const initialActivityCodes = ActivityCodesData[0].secteur_codes_mapping;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dynamic Tag System</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Activity Code Selection */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">
              Lists of Activity Codes
            </h2>
            <ScrollArea className="h-[200px]">
              {initialActivityCodes.map((secteur) => (
                <div key={secteur.secteur} className="mb-4">
                  {secteur.codes_d_activite.map((code) => (
                    <div key={code} className="mb-2">
                      <Button
                        variant={selectCode === code ? "secondary" : "outline"}
                        onClick={() =>
                          selectCode == code
                            ? setSelectCode(null)
                            : setSelectCode(code)
                        }
                        className="w-full justify-between"
                      >
                        <span>{code}</span>
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Add/Remove Buttons and Tag Creation */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 my-auto w-full md:w-auto">
            <Button
              onClick={() => {
                if (selectCode?.trim()) addActivityCode(selectCode);
              }}
              variant="default"
              size="sm"
              className="w-full md:w-auto"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
            <Button
              onClick={() => {
                if (selectCode?.trim()) removeActivityCode(selectCode);
              }}
              variant="destructive"
              size="sm"
              className="w-full md:w-auto"
            >
              <Minus className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>

          <Card className="flex-grow">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4">New Tag</h2>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="tagName" className="text-sm font-medium">
                    Tag Name
                  </label>
                  <Input
                    id="tagName"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Enter tag name"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button onClick={handleCreateTag}>Create a New Tag</Button>
                  <Button variant="outline" onClick={handleClear}>
                    Clear
                  </Button>
                </div>
                {selectedActivityCodes.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold">Selected Activity Codes</h3>
                    <div className="space-y-2">
                      {selectedActivityCodes.map((code) => (
                        <div
                          key={code}
                          className="flex items-center space-x-2 bg-muted/90 p-1 rounded-lg border border-gray-500"
                        >
                          <span>{code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* List of Created Tags */}
      <Card className="mt-6">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">List of Created Tags</h2>
          <ScrollArea className="h-[400px]">
            {tags.map((tag) => (
              <div
                key={tag.name}
                className="mb-4 border-b pb-4 last:border-b-0"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExpandTag(tag.name)}
                >
                  <span className="font-medium">
                    {tag.name} ({tag.activityCodes.length} activity codes)
                  </span>
                  {expandedTag === tag.name ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
                {expandedTag === tag.name && (
                  <div className="mt-2 space-y-2">
                    {tag.activityCodes.map((code) => (
                      <div
                        key={code}
                        className="flex items-center justify-between p-2 bg-secondary rounded-md"
                      >
                        <span>{code}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeActivityCode(code)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
