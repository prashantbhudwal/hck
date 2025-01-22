"use client";

import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import { searchTermAtom } from "@/atoms/filters";

export function ToolSearch() {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);

  return (
    <div className="w-full md:w-2/3">
      <div className="relative">
        <Input
          id="search"
          type="text"
          placeholder="Search for tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
