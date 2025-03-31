"use client";
import Link from "next/link";

const AddRssFeedFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".add-form");
    if (form) form.reset();
  };
  return (
    <button onClick={reset}>
      <Link href="/">X</Link>
    </button>
  );
};

export default AddRssFeedFormReset;
