"use client";

import { useRouter } from "next/navigation";

export default function Header({ title }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-5 bg-white">
      <div>{title}</div>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
}
