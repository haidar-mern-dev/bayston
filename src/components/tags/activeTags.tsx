"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Secteur {
  secteur: string;
  codes_d_activite: string[];
}

interface ActiveTagsProps {
  initialActivityCodes: Secteur[]; // Define the type of `initialActivityCodes`
  selectedActivityCodes: string[];
  setSelectedActivityCodes: React.Dispatch<React.SetStateAction<string[]>>;
}

const ActiveTags: React.FC<ActiveTagsProps> = ({
  initialActivityCodes,
  selectedActivityCodes,
  setSelectedActivityCodes,
}) => {
  const toggleActivityCode = (code: string) => {
    if (selectedActivityCodes.includes(code)) {
      setSelectedActivityCodes(selectedActivityCodes.filter((c) => c !== code));
    } else {
      setSelectedActivityCodes([...selectedActivityCodes, code]);
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Lists of activity codes</h2>
        <ScrollArea className="h-[200px]">
          {initialActivityCodes.map((secteur) => {
            return (
              <div key={secteur.secteur} className="mb-4">
                <h3 className="font-bold mb-2">{secteur.secteur}</h3>
                {secteur.codes_d_activite.map((code) => (
                  <div
                    key={code}
                    className="flex items-center space-x-2 mb-2 text-nowrap"
                  >
                    <Button
                      variant={
                        selectedActivityCodes.includes(code)
                          ? "secondary"
                          : "outline"
                      }
                      onClick={() => toggleActivityCode(code)}
                      className="w-full justify-between"
                    >
                      <span>{code}</span>
                      {selectedActivityCodes.includes(code) && (
                        <X
                          className="h-4 w-4 text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleActivityCode(code);
                          }}
                        />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActiveTags;
