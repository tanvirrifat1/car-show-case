"use client";

import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <section className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1">{children}</div>
    </section>
  );
}
