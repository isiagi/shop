import { Button } from "@/components/ui/button";
import React from "react";

function SectionHeader() {
  return (
    <div className="flex items-center justify-between px-5 pt-10">
      <div>
        <div className="flex items-center gap-2">
          <div className="h-7 w-4 bg-black" />

          <h4>Best Seller</h4>
        </div>
        <h2 className="text-2xl pt-2">Explore Best Seller</h2>
      </div>
      <Button>View All</Button>
    </div>
  );
}

export default SectionHeader;
