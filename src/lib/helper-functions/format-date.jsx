import { format } from "date-fns";

export default function formatDate(input) {
  if (!input) return "";

  let date;

  if (typeof input === "number") {
    date = new Date(input * 1000);
  } else if (typeof input === "string") {
    date = new Date(input);
    if (isNaN(date.getTime())) return "";
  } else {
    return "";
  }

  return format(date, "MMMM do yyyy");
}
