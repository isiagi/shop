import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="grid grid-cols-fluid place-items-center bg-black bg-opacity-50 py-10">
      <div>
        <p>Category</p>
        <h4 className="text-3xl font-semibold text-white py-5">
          Enhance Your Style
        </h4>
        <Button>Shop Now</Button>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className=" w-full h-[300px] ] object-cover object-center rounded-sm"
        />
      </div>
    </div>
  );
}

export default Banner;
