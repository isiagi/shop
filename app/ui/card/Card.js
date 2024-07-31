import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DeleteIcon,
  EyeIcon,
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";

function CardUi({ pathname }) {
  return (
    <Card>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww"
          alt="nextui"
          width={0}
          height={0}
          sizes="100vw"
          className=" w-full h-[200px] ] object-cover object-center"
        />
        <div className={"absolute top-4 right-4 flex flex-col gap-2"}>
          <Link href="/detail/1">
            <Button
              variant="secondary"
              size="icon"
              className={`${pathname === "/wishlist" && "hidden"} rounded-full`}
            >
              <EyeIcon className="h-5 w-5" />
            </Button>
          </Link>

          <Button
            variant="secondary"
            size="icon"
            className={`${pathname === "/wishlist" && "hidden"} rounded-full`}
          >
            <HeartIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className={`${pathname !== "/wishlist" && "hidden"} rounded-full`}
          >
            <DeleteIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">The Nort Coat</CardTitle>
            <CardDescription>30,000 UGX</CardDescription>
          </div>
          <ShoppingBagIcon className="h-7 w-7" />
        </div>
      </CardHeader>
      {/* <CardContent>
        <Button>Add To Cart</Button>
      </CardContent> */}
    </Card>
  );
}

export default CardUi;
