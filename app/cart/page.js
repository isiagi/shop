import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Table>
        <TableCaption>A list of your cart items</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Sub Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-3">
                <Image
                  className="h-16 w-16 rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt=""
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-sm">Basic Tee 6-Pack</p>
                  <p className="text-xs">Gray</p>
                </div>
              </div>
            </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>
              <input
                type="number"
                defaultValue={1}
                className="w-16 rounded-md border border-gray-300 px-3 py-2 text-right"
              />
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
        <Button>Return To Shop</Button>
      </div>

      <div className="grid grid-cols-fluid gap-10 pb-20">
        <div className="flex justify-between items-center gap-10 py-10">
          <Input placeholder="Coupon Code" />
          <Button>Apply</Button>
        </div>
        <div>
          <h3 className="text-2xl">Cart Total</h3>
          <div className="flex justify-between items-center gap-10 py-3">
            <h4>Subtotal</h4>
            <p>$250.00</p>
          </div>
          <div className="flex justify-between items-center gap-10 py-3">
            <h4>Shipping</h4>
            <p>Free</p>
          </div>
          <div className="flex justify-between items-center gap-10 py-3">
            <h4>Total</h4>
            <p>$250.00</p>
          </div>
          <Button className="w-full">Proceed to checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default page;
