import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
              <BreadcrumbPage>Account</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-center gap-6 md:gap-20 flex-wrap pb-20">
        <div className="">
          <h3 className="text-red-400 text-lg pb-3">Manage Your Account</h3>
          <ul>
            <li>My Account</li>
            <li>Order History</li>
            <li>WishList</li>
            <li>Track My Order</li>
            <li>Change Password</li>
          </ul>
        </div>
        <div className="pt-8">
          <div>
            <h3 className="text-red-400 py-3">Edit Profile</h3>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Name" />
                <Input placeholder="Name" />
                <Input placeholder="Name" />
                <Input placeholder="Name" />
              </div>
              <h3 className="py-3">Change Password</h3>
              <div className="grid gap-3">
                <Input placeholder="Name" />
                <Input placeholder="Name" />
                <Input placeholder="Name" />
              </div>
              <div className="flex gap-4 items-center py-5">
                <h3>Cancel</h3>
                <Button>Edit Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
