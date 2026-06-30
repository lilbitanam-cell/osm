"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UploadCloud,
  FileEdit,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  Bell,
} from "lucide-react";
import { cn } from "../../lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Upload", href: "/upload", icon: UploadCloud },
  { name: "Evaluation", href: "/evaluate", icon: FileEdit },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
  { name: "Candidates", href: "/candidates", icon: Users },
  { name: "Notifications", href: "/notifications", icon: Bell },
];

const bottomNav = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help Center", href: "/help", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-brand-card border-r border-brand-border shadow-brand-sm">
      <div className="flex h-16 items-center px-6 border-b border-brand-border">
        <div className="flex items-center gap-2 font-bold text-xl text-brand-primary">
          <div className="h-8 w-8 rounded-lg bg-brand-primary flex items-center justify-center text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          AuraMark
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                isActive
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "text-brand-text-secondary hover:bg-brand-bg hover:text-brand-text-primary"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200",
                  isActive
                    ? "text-brand-primary"
                    : "text-brand-text-secondary group-hover:text-brand-text-primary"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-brand-border">
        {bottomNav.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                isActive
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "text-brand-text-secondary hover:bg-brand-bg hover:text-brand-text-primary"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive
                    ? "text-brand-primary"
                    : "text-brand-text-secondary group-hover:text-brand-text-primary"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
