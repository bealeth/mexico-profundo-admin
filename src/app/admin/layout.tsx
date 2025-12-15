"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "ADMIN") {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="p-6">
      <header className="mb-6 border-b pb-4">
        <h2 className="text-xl font-semibold">
          Panel de Administración
        </h2>
      </header>

      <main>{children}</main>
    </div>
  );
}
