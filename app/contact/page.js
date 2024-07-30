import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function page() {
  return (
    <div>
      <div>
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
      <div className="flex items-center justify-center gap-20 py-10">
        <div className="leading-loose">
          <div className="flex items-center gap-4">
            <PhoneCall />
            <h3>Talk To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>

          <hr className="my-10" />

          <div className="flex items-center gap-4">
            <PhoneCall />
            <h3>Talk To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <div>
          <form>
            <div className="grid md:grid-cols-3 gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Phone" />
            </div>
            <div className="my-7">
              <Textarea placeholder="Your Message" />
            </div>

            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
