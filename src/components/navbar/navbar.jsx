"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex items-center justify-between px-10">
      <Link href="/top-stories">
        <img src="logo.png" alt="Logo" className="h-20 cursor-pointer" />
      </Link>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2">
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className="hidden md:flex items-center gap-4 text-xs">
        <ModeToggle />
        <Link href="/top-stories" className="hover:text-orange-500">
          TOP STORIES
        </Link>
        <Link href="/reddit-top" className="hover:text-orange-500">
          TRENDING ON R/DENMARK
        </Link>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-black shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              href="/top-stories"
              className="hover:text-orange-500"
              onClick={closeMenu}
            >
              TOP STORIES
            </Link>
            <Link
              href="/reddit-top"
              className="hover:text-orange-500"
              onClick={closeMenu}
            >
              TRENDING ON R/DENMARK
            </Link>
            <ModeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
