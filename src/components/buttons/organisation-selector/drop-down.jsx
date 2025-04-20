"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

const DropDown = ({ organisations, selected }) => {
  const router = useRouter();

  const handleSelect = (value) => {
    if (!value || value === "all") {
      router.push("/top-stories");
    } else {
      router.push(`/top-stories/${value}`);
    }
  };

  console.log("selected org", selected);

  return (
    <div className="w-[28%] h-4">
      <Select value={selected} onValueChange={handleSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={selected || "Top"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Organisations</SelectLabel>
            <SelectItem value="all">Top 10</SelectItem>
            {organisations.map((org, index) => (
              <SelectItem key={index} value={org}>
                {org}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDown;
