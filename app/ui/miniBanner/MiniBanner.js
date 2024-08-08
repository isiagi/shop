import { Button } from "@/components/ui/button";
import React from "react";

function MiniBanner() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1617864064479-f203fc7897c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxheXN0YXRpb258ZW58MHx8MHx8fDA%3D')] h-[200px] md:h-[200px] bg-cover bg-no-repeat bg-center flex items-center">
      <div className="pl-5">
        <p>Save Up To 20% Off</p>
        <h3 className="text-xl mt-3">Santa Lucia Three Seater Sofa</h3>
        <Button className="bg-[#ff5252] mt-5">Shop Now</Button>
      </div>
    </div>
  );
}

export default MiniBanner;
