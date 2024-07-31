import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Heart,
  ShoppingBag,
  CircleUser,
  Search,
  Menu,
  Package2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="flex justify-between items-center w-full">
          <h1 className="hidden md:block">EShop</h1>

          <ul className=" hidden md:flex gap-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/signup"}>
              <li>SignUp</li>
            </Link>
          </ul>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-4 text-md font-medium mb-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
                <Link
                  href="/signup"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sign Up
                </Link>
                <Link
                  href="/account"
                  className="text-muted-foreground hover:text-foreground"
                >
                  My Account
                </Link>
              </nav>
              <Separator />
              <h4 className="py-4">Categories</h4>
              <nav className="grid gap-4 text-md font-medium">
                <div className="flex flex-col gap-4">
                  <Link href="/category/1">Home & Lifestyle</Link>
                  <Link href="/category/1">Clothing</Link>
                  <Link href="/category/1">Electronics</Link>
                  <Link href="/category/1">Gadgets</Link>
                  <Link href="/category/1">Women Fashion</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-4 ">
            <form className="ml-auto  sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <Link href={"/wishlist"}>
              <Heart />
            </Link>
            <Link href={"/cart"}>
              <ShoppingBag />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuSeparator />
                <Link href={"/account"}>
                  <DropdownMenuItem>Account</DropdownMenuItem>{" "}
                </Link>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    </>
  );
}
