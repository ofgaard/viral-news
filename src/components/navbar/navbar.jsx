import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between  px-10">
      <img src="logo.png" alt="" className="h-20" />
      <div className="flex items-center gap-4 text-xs">
        <Link href="/top-stories">TOP STORIES</Link>
        <Link href="/reddit-top">TRENDING ON R/DENMARK</Link>
      </div>
    </div>
  );
};

export default Navbar;
