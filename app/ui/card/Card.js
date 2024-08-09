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
  ScanEye,
  ShoppingBag,
  ShoppingBagIcon,
  ShoppingCartIcon,
  View,
  ZoomOut,
} from "lucide-react";
import Link from "next/link";

function CardUi({ pathname }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RofGVufDB8fDB8fHww"
          alt="nextui"
          width={0}
          height={0}
          sizes="100vw"
          className="p-1 w-full h-[180px] md:h-[190px]  object-cover object-center rounded-xl"
        />
        <div className={"absolute top-4 right-4 flex flex-col gap-2"}>
          <Button
            variant="secondary"
            size="icon"
            className={`${
              pathname === "/wishlist" && "hidden"
            } rounded-full text-[#ff5252] hover:bg-[#ff5252] hover:text-white`}
          >
            <HeartIcon className="h-5 w-5" />
          </Button>

          <Link href="/detail/1">
            <Button
              variant="secondary"
              size="icon"
              className={`${
                pathname === "/wishlist" && "hidden"
              } rounded-full bg-white text-green-200 hover:bg-[#ff5252] hover:text-white`}
            >
              <ScanEye size={10} className="h-5 w-5" />
            </Button>
          </Link>

          <Button
            variant="secondary"
            size="icon"
            className={`${pathname !== "/wishlist" && "hidden"} rounded-full`}
          >
            <DeleteIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between py-3 px-5">
        <div>
          <p className="text-muted-foreground text-sm">clothing</p>
          <h3 className="text-slate-800 py-1">Leather Coat</h3>
          <p className="text-[#ff5252] font-semibold">Ugx 250</p>
        </div>
        <ShoppingBag className="h-7 w-7 text-green-200 hover:text-green-500" />
      </div>

      {/* <CardContent>
        <Button>Add To Cart</Button>
      </CardContent> */}
    </Card>
  );
}

export default CardUi;
