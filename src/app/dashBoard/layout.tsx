"use client";

import SideBar from "@/components/ui/SideBar";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <section className="flex">
      <SideBar />
      <div className="flex-1">{children}</div>
    </section>
  );
}
