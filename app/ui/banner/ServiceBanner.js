import { CarFront, PhoneCallIcon, Verified } from "lucide-react";
import React from "react";

function ServiceBanner() {
  return (
    <div className="flex justify-center md:justify-between  flex-wrap items-center gap-10 py-10 px-5">
      <div className="text-center">
        <CarFront className="mx-auto" />
        <h3>Free And Fast Delievry</h3>
        <p> Free delievery for order over $100</p>
      </div>

      <div className="text-center">
        <PhoneCallIcon className="mx-auto" />
        <h3>24/7 Customer Service</h3>
        <p>Friendly 24/7 customer support</p>
      </div>

      <div className="text-center">
        <Verified className="mx-auto" />
        <h3>Money Back Granrantee</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
}

export default ServiceBanner;
