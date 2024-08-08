import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1617864064479-f203fc7897c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxheXN0YXRpb258ZW58MHx8MHx8fDA%3D')] h-[200px] md:h-[300px] bg-cover bg-no-repeat bg-center flex items-center">
      <div>
        <p>Category</p>
        <h4 className="text-3xl font-semibold  py-5">Enhance Your Style</h4>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
}

export default Banner;
