import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10">
      <Link href="/top-stories">
        <img src="logo.png" alt="Logo" className="h-20 cursor-pointer" />
      </Link>
      <div className="flex items-center gap-4 text-xs">
        <ModeToggle></ModeToggle>
        <Link href="/top-stories" className="hover:text-orange-500">
          TOP STORIES
        </Link>
        <Link href="/reddit-top" className="hover:text-orange-500">
          TRENDING ON R/DENMARK
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
