"use client";

import { useState, type PropsWithChildren } from "react";
import { Heading } from "../ui/heading";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const mockImage =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export const CollectionHeaderWrapper = (
  props: PropsWithChildren<{ heading: string }>
) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-border rounded-md border overflow-hidden">
      <div className="relative w-full h-36">
        <Image
          src={mockImage}
          alt="mock image"
          fill
          className="object-cover w-full h-36"
        />
      </div>
      <div className="p-6">
        <Heading size="h2">{props.heading}</Heading>
        <div
          className={cn(
            "text-muted-foreground flex flex-col gap-4 mt-2",
            !showMore && "max-h-[100px] overflow-hidden"
          )}
        >
          {props.children}
        </div>
        <Button
          variant="secondary"
          onClick={() => setShowMore((prev) => !prev)}
          className="mt-6"
        >
          {!showMore ? "Show more" : "Show less"}
        </Button>
      </div>
    </div>
  );
};