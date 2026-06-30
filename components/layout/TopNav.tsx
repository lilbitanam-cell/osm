"use client";

import { Bell, Search, Sun, Moon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function TopNav() {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-brand-border bg-brand-card px-4 shadow-brand-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-brand-text-secondary pl-3"
            aria-hidden="true"
          />
          <Input
            id="search-field"
            className="block h-full w-full border-0 bg-transparent py-0 pl-10 pr-0 text-brand-text-primary focus:ring-0 sm:text-sm"
            placeholder="Search candidates, subjects, or exams..."
            type="search"
            name="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Button variant="ghost" size="icon" className="text-brand-text-secondary">
            <span className="sr-only">Toggle dark mode</span>
            <Sun className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-brand-text-secondary">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-brand-danger ring-2 ring-brand-card" />
          </Button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-brand-border" aria-hidden="true" />

          {/* Profile dropdown */}
          <div className="flex items-center gap-x-4">
            <button type="button" className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                AP
              </div>
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-4 text-sm font-semibold leading-6 text-brand-text-primary" aria-hidden="true">
                  Anamika P.
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
