"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

export default function NavBar() {
  const pathname = usePathname();
  const fillColor = "#fff";
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-solid">
      <Logo fill={fillColor} />
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          {" "}
          Transações
        </Link>
      </div>
    </nav>
  );
}
