"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Tool = {
  name: string;
  description: string;
  url: string;
  icon: string;
};

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row">
        {/* <div className="w-full sm:w-1/3 p-4 flex items-center justify-center bg-gray-50">
          <Image
            src={tool.icon}
            alt={`${tool.name} icon`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div> */}
        <div className="flex w-full flex-col justify-between">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-semibold">{tool.name}</CardTitle>
            <CardDescription>{tool.description}</CardDescription>
          </CardHeader>
          <CardFooter className="justify-end p-4">
            <Button variant={"outline"}>
              <Link
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium"
              >
                Get
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
