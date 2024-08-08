"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Cable,
  Home,
  HomeIcon,
  PersonStanding,
  Phone,
  Shirt,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

function Header() {
  return (
    <div className="mx-auto w-full md:px-10 px-2 md:pb-12 pb-6">
      <div className="md:grid gap-6  md:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr]">
        <nav className=" hidden  md:grid gap-4  border-r p-4 ">
          <div className="flex flex-col gap-6 text-muted-foreground md:mt-8 mt-4">
            <div className="flex items-center  gap-2">
              <Home size={19} color="#ff5252" />
              <Link href="/category/1">Home & Lifestyle</Link>
            </div>
            <Separator />
            <div className="flex items-center  gap-2">
              <Shirt size={19} color="#ff5252" />
              <Link href="/category/1">Clothing</Link>
            </div>
            <Separator />
            <div className="flex items-center  gap-2">
              <Cable size={19} color="#ff5252" />
              <Link href="/category/1">Electronics</Link>
            </div>
            <Separator />
            <div className="flex items-center  gap-2">
              <Phone size={19} color="#ff5252" />
              <Link href="/category/1">Gadgets</Link>
            </div>
            <Separator />
            <div className="flex items-center  gap-2">
              <PersonStanding size={19} color="#ff5252" />
              <Link href="/category/1">Women Fashion</Link>
            </div>
          </div>
        </nav>

        <div className="md:mt-8 mt-4">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
          >
            <CarouselContent className="w-auto  xs:w-[400px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center w-full"
                >
                  <div className="p-1 w-full">
                    <div className=" bg-[url('https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww')] bg-no-repeat bg-cover  bg-black bg-opacity-20 bg-blend-overlay h-[200px] md:h-[300px] lg:h-[400px] flex items-center w-full">
                      <div className="flex items-center justify-center pl-10">
                        <span className=" font-semibold pl-4">
                          <h3 className="text-white md:text-3xl text-xl">
                            Best Product Online
                          </h3>
                          <p className="py-2 text-[#fff] md:text-xl text-lg">
                            Unbelievable deals
                          </p>
                          <Button className="bg-[#ff5252]">Shop Now</Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#ff5252] outline-none hover:bg-[#ff5252] text-white" />
            <CarouselNext className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#ff5252] outline-none hover:bg-[#ff5252] text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Header;
