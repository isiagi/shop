import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Mailbox, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function page() {
  return (
    <div>
      <div className="px-5">
        <Breadcrumb className="pt-10 pb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-center gap-20 py-10 text-muted-foreground">
        <div className="leading-loose">
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-[#ff5252] text-white"
            >
              <PhoneCall size={18} />
            </Button>
            <h3>Talk To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +2560987567890</p>

          <hr className="my-10" />

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-[#ff5252] text-white"
            >
              <Mailbox />
            </Button>
            <h3>Write To Us</h3>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: customer@eshop.com</p>
          <p>Email: support@eshop.com</p>
        </div>
        <div className="border p-5">
          <form>
            <div className="grid md:grid-cols-3 gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Phone" />
            </div>
            <div className="my-7">
              <Textarea cols={5} placeholder="Your Message" />
            </div>

            <Button type="submit" className="bg-[#ff5252]">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
