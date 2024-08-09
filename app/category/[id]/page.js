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
import SectionHeader from "@/app/ui/sectionHeader/SectionHeader";
import CardUi from "@/app/ui/card/Card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  availability,
  brands,
  conditions,
  sizes,
} from "@/utils/filterOptions/filters";
import Banner from "@/app/ui/banner/Banner";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div>
      {/* <div className="mt-8 max-w-6xl mx-auto">
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
      </div> */}
      <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[230px_1fr] px-5">
        <div className="hidden md:flex justify-center mt-5">
          <div className=" w-full">
            <h2 className="text-xl text-center">Filters</h2>
            <div className="grid gap-3">
              <div>
                <h3>Availability</h3>
                {availability.map((item, index) => (
                  <div
                    key={index}
                    className="items-top flex items-center space-x-2"
                  >
                    <Checkbox id="terms1" />
                    <div className="flex justify-between leading-none w-full items-center">
                      <span>
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.label}
                        </label>
                      </span>
                      <p className="text-sm text-muted-foreground">
                        ({item.count})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3>Sizes</h3>
                {sizes.map((item, index) => (
                  <div
                    key={index}
                    className="items-top flex items-center space-x-2"
                  >
                    <Checkbox id="terms1" />
                    <div className="flex justify-between leading-none w-full items-center">
                      <span>
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.label}
                        </label>
                      </span>
                      <p className="text-sm text-muted-foreground">
                        ({item.count})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3>Conditions</h3>
                {conditions.map((item, index) => (
                  <div
                    key={index}
                    className="items-top flex items-center space-x-2"
                  >
                    <Checkbox id="terms1" />
                    <div className="flex justify-between leading-none w-full items-center">
                      <span>
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.label}
                        </label>
                      </span>
                      <p className="text-sm text-muted-foreground">
                        ({item.count})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-6 mt-5">
            <div>
              <Image
                src={"/assets/images/clothes.jpg"}
                alt="clothes"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="py-5">
              <h2 className="text-xl">Clothes</h2>
              <p>
                Fashion has been creating well-designed collections since 2010.
                The brand offers feminine designs delivering stylish separates
                and statement dresses which has since evolved.
              </p>
            </div>

            <div>
              <Dialog>
                <DialogTrigger className="md:hidden flex" asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className=" w-20 md:hidden bg-[#ff5252] text-white justify-self-end"
                  >
                    Filter
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Filters</DialogTitle>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Availability</AccordionTrigger>
                        <AccordionContent>
                          {availability.map((item, index) => (
                            <div
                              key={index}
                              className="items-top flex items-center space-x-2"
                            >
                              <Checkbox id="terms1" />
                              <div className="flex justify-between leading-none w-full items-center">
                                <span>
                                  <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {item.label}
                                  </label>
                                </span>
                                <p className="text-sm text-muted-foreground">
                                  ({item.count})
                                </p>
                              </div>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Sizes</AccordionTrigger>
                        <AccordionContent>
                          {sizes.map((item, index) => (
                            <div
                              key={index}
                              className="items-top flex items-center space-x-2"
                            >
                              <Checkbox id="terms1" />
                              <div className="flex justify-between leading-none w-full items-center">
                                <span>
                                  <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {item.label}
                                  </label>
                                </span>
                                <p className="text-sm text-muted-foreground">
                                  ({item.count})
                                </p>
                              </div>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Condition</AccordionTrigger>
                        <AccordionContent>
                          {conditions.map((item, index) => (
                            <div
                              key={index}
                              className="items-top flex items-center space-x-2"
                            >
                              <Checkbox id="terms1" />
                              <div className="flex justify-between leading-none w-full items-center">
                                <span>
                                  <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {item.label}
                                  </label>
                                </span>
                                <p className="text-sm text-muted-foreground">
                                  ({item.count})
                                </p>
                              </div>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit" className="w-fit">
                        Apply Filters
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div></div>
          </div>
          <div className="p-0 md:p-6 grid grid-cols-fluid gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <CardUi key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
