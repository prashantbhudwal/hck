"use client";

import { ToolCard } from "./tool-card";
import { toolCategories } from "./stack-data";
import { useAtom } from "jotai";
import { searchTermAtom, selectedCategoriesAtom } from "@/atoms/filters";
import { ToolSearch } from "./tool-search";
import Fuse from "fuse.js";
import { ToolFilters } from "./tool-filters";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SocialLinks } from "./social-links";
import { Header } from "./header";

export function Stack() {
  const [searchTerm] = useAtom(searchTermAtom);
  const [selectedCategories] = useAtom(selectedCategoriesAtom);
  const [parent] = useAutoAnimate();

  const fuse = new Fuse(toolCategories, {
    keys: ["tools.name", "tools.description"],
    threshold: 0.3,
  });

  const filteredCategories = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : toolCategories;

  const finalCategories = filteredCategories.filter(
    (category) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes("All Tools") ||
      selectedCategories.includes(category.category)
  );

  return (
    <div className="container mx-auto px-4 py-8" ref={parent}>
      <div className="flex md:flex-row flex-col items-center w-full justify-between">
        <Header />
        <SocialLinks />
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <ToolSearch />
          <ToolFilters />
        </div>
      </div>

      {finalCategories.map((category) => (
        <div key={category.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.tools
              .filter(
                (tool) =>
                  tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tool.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
          </div>
        </div>
      ))}

      {finalCategories.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No tools found</p>
      )}
    </div>
  );
}
