"use client";

import React from "react";
// import { Button } from "@/components/ui/tailwindcss-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-white">Name</Label>
        <Input className="bg-zinc-900 text-white" id="name" placeholder="Your name" required />
      </div>
      <div>
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input className="bg-zinc-900 text-white" id="email" type="email" placeholder="Your email" required />
      </div>
      <div>
        <Label htmlFor="city" className="text-white">City</Label>
        <Input className="bg-zinc-900 text-white" id="city" placeholder="Your city" required />
      </div>
      <div>
        <Label htmlFor="message" className="text-white">Message</Label>
        <Textarea className="bg-zinc-900 text-white" id="message" placeholder="Your message" required />
      </div>
      <div className="flex justify-between">
        {/* <Button type="reset" variant="outline">
          Clear
        </Button> */}
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>{`SUBMIT`}</span>
          {/* <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg> */}
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      </div>
    </form>
  );
}

