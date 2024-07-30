"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import React from "react";
import CardUi from "../ui/card/Card";
import SectionHeader from "../ui/sectionHeader/SectionHeader";

function Page() {
  const y = usePathname();

  console.log(y);
  return (
    <div>
      <div className="flex justify-between items-center gap-10 py-10">
        <h3>WishList (4)</h3>

        <Button>Add All To Cart</Button>
      </div>
      <div className="p-6 grid grid-cols-fluid gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardUi key={index} pathname={"/wishlist"} />
        ))}
      </div>

      <div>
        <SectionHeader />
        <div className="p-6 grid grid-cols-fluid gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardUi key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
