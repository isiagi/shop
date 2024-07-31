import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-fluid py-10">
      <div className="bg-[url('https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww')] bg-cover bg-no-repeat bg-center min-h-[200px] md:min-h-[500px]"></div>
      <div className="px-5 flex justify-center items-center">
        <div className=" w-full md:w-1/2 md:py-0 py-10">
          <h3 className="text-2xl">Create an account</h3>
          <p className="py-2">Please enter details below.</p>

          <div className="grid gap-7">
            <Input placeholder="Username" className="w-full" />
            <Input placeholder="Email" className="w-full" />
            <Input placeholder="Password" className="w-full" />
          </div>
          <Button className="mt-5">Sign Up</Button>

          <p className="py-5">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
