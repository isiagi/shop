"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ImageGallery from "react-image-gallery";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CarFrontIcon, RotateCwSquare } from "lucide-react";
import SectionHeader from "@/app/ui/sectionHeader/SectionHeader";
import CardUi from "@/app/ui/card/Card";
import { Separator } from "@/components/ui/separator";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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
              <BreadcrumbPage>Product</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid md:grid-cols-2  gap-6 pb-20">
        <div className="">
          <ImageGallery
            className="h-full"
            items={images}
            // thumbnailPosition="left"
          />
        </div>
        <div>
          <div className=" pb-3">
            <h3>Product Name</h3>
            <p className="text-sm text-green-600">In Stock</p>
            <h3>UGX 100</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis, consequuntur perspiciatis a eum laboriosam at,
              excepturi, praesentium nihil nam placeat sint similique? Nulla
              unde non magnam? Natus est dolorum aperiam?
            </p>
          </div>
          <Separator className="my-5" />
          <div className=" py-5 flex items-center gap-4 flex-wrap">
            <h3>Sizes : </h3>
            <ToggleGroup variant="outline" type="multiple">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                XS
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                S
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                M
              </ToggleGroupItem>
              <ToggleGroupItem value="strike" aria-label="Toggle strike">
                L
              </ToggleGroupItem>
              <ToggleGroupItem value="link" aria-label="Toggle link">
                XL
              </ToggleGroupItem>
              <ToggleGroupItem value="link" aria-label="Toggle link">
                XXL
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div>
              <Button>-</Button>
              <span className="px-4">1</span>
              <Button>+</Button>
            </div>
            <Button className="w-1/2">Buy Now</Button>
          </div>
          <div className="border p-3 mt-7">
            <div className="flex items-center gap-2 border-b pb-2 mb-2">
              <CarFrontIcon />
              <span>
                <p>Free Shipping</p>
                <p>Enter your postal code for Delivery Availability</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCwSquare />
              <span>
                <p>Return Delievery</p>
                <p>Free 30 Days Delivery Returns. Details</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeader />
        <div className="p-6 grid grid-cols-fluid gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardUi key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
