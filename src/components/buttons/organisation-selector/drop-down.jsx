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
    if (value) {
      router.push(`/top-stories/${value}`);
    }
  };

  console.log("orgs:", organisations);

  return (
    <div className="md:w-[20%] mb-6">
      <Select value={selected} onValueChange={handleSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an organisation" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Organisations</SelectLabel>
            {organisations.map((org) => (
              <SelectItem key={org.id} value={org}>
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
