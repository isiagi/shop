import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";

function GridBanner() {
  return (
    <div>
      {/* <SectionHeader /> */}
      <div className="grid md:grid-cols-2 pt-5">
        <div className="bg-[url('https://images.unsplash.com/photo-1617864064479-f203fc7897c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxheXN0YXRpb258ZW58MHx8MHx8fDA%3D')] h-[200px] md:h-[500px] bg-cover bg-no-repeat bg-center">
          <h3>Hello</h3>
        </div>
        <div className="grid md:grid-rows-2">
          <div className="bg-[url('https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0fGVufDB8fDB8fHww')] h-[200px] md:h-full bg-cover bg-no-repeat bg-center">
            <h3>There</h3>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="bg-[url('https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D')] h-[200px] md:h-full bg-cover bg-no-repeat bg-center">
              <h3>Left</h3>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1458538977777-0549b2370168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D')] h-[200px] md:h-full bg-cover bg-no-repeat bg-center">
              <h3>Right</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridBanner;
