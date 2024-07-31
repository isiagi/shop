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

function Header() {
  return (
    <div className="mx-auto w-full max-w-6xl pb-12">
      <div className="grid gap-6  md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className=" hidden  md:grid gap-4  border-r p-8">
          <div className="flex flex-col gap-6">
            <Link href="/category/1">Home & Lifestyle</Link>
            <Link href="/category/1">Clothing</Link>
            <Link href="/category/1">Electronics</Link>
            <Link href="/category/1">Gadgets</Link>
            <Link href="/category/1">Women Fashion</Link>
          </div>
        </nav>

        <div className="mt-8">
          <Carousel
            className=" "
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
                    <Card className=" bg-[url('https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww')] bg-no-repeat bg-cover  bg-black bg-opacity-20 bg-blend-overlay h-[200px] md:h-[300px] lg:h-[400px] flex justify-center items-center">
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Header;
