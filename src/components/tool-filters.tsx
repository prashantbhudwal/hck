"use client";

import { useAtom } from "jotai";
import { selectedCategoriesAtom } from "@/atoms/filters";
import { toolCategories } from "./stack-data";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function ToolFilters() {
  const [selectedCategories, setSelectedCategories] = useAtom(
    selectedCategoriesAtom,
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(category ? [category] : []);
  };

  return (
    <div className="w-full md:w-1/3">
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger>
          <SelectValue placeholder="All Tools">
            {selectedCategories.length > 0
              ? selectedCategories[0]
              : "All Tools"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="All Tools" value="All Tools">
            All Tools
          </SelectItem>
          {toolCategories.map((category) => (
            <SelectItem key={category.category} value={category.category}>
              {category.category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
