import { Button } from "@/components/ui/button";
import React from "react";

function SectionHeader() {
  return (
    <div className="flex justify-between px-5 pt-10">
      <div>
        <div className="flex items-center gap-2">
          <div className="h-7 w-4 bg-[#ff5252]" />

          <h4 className="text-[#ff5252]">Best Seller</h4>
        </div>
        <h2 className="md:text-2xl text-xl pt-2 text-slate-800">
          Explore Best Seller
        </h2>
      </div>
      <Button className="bg-[#ff5252]">View All</Button>
    </div>
  );
}

export default SectionHeader;
