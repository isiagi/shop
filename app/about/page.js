import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

import ServiceBanner from "../ui/banner/ServiceBanner";
import { Linkedin, LucideInstagram, X } from "lucide-react";

function page() {
  return (
    <div className="px-5">
      <div>
        <Breadcrumb className="pt-10 pb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-fluid gap-4 place-items-center">
        <div className="text-center">
          <h2 className="text-2xl">Our Story</h2>

          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>

          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww"
            alt="nextui"
            width={0}
            height={0}
            sizes="100vw"
            className=" w-full h-[400px] object-cover object-center"
          />
        </div>
      </div>
      <ServiceBanner />
      <div className="grid grid-cols-fluid gap-4 py-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <Image
              src="https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww"
              alt="nextui"
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-[250px] object-cover object-center"
            />
            <h2 className="text-xl">Tom</h2>
            <p className="text-sm py-2">CEO</p>
            <div className="flex gap-2 items-center">
              <LucideInstagram />
              <Linkedin />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
