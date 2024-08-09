import { Button } from "@/components/ui/button";
import React from "react";

function MiniBanner() {
  return (
    <div className="min-h-[200px] overflow-hidden relative group">
      <div className="group-hover:animate-[zoom_30s_infinite] absolute h-full w-full flex bg-[url('https://images.unsplash.com/photo-1617864064479-f203fc7897c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxheXN0YXRpb258ZW58MHx8MHx8fDA%3D')] bg-cover bg-no-repeat bg-center bg-black bg-blend-overlay bg-opacity-[0.3]"></div>
      <div className="pl-5 absolute   h-full w-full flex flex-col justify-center">
        <p className="text-[#ff5252] font-semibold">Save Up To 20% Off</p>
        <h3 className="text-xl mt-3 text-white">
          Santa Lucia Three Seater Sofa
        </h3>
        <Button className="bg-[#ff5252] mt-5 w-fit">Shop Now</Button>
      </div>
    </div>
  );
}

export default MiniBanner;
