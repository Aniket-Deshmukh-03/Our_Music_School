"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import Image from "next/image";

const musicContent = [
    {
      title: "Music Theory",
      description:
        "Learn the basics of music theory. In this course, you will learn about notes, scales, and chords.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white">
          Music Theory
        </div>
      ),
    },
    {
      title: "Guitar",
      description:
        "Learn how to play the guitar. In this course, you will learn how to play chords and melodies.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
          Guitar
        </div>
      ),
    },
    {
      title: "Piano",
      description:
        "Learn how to play the piano. In this course, you will learn how to play chords and melodies.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--pink-500))] flex items-center justify-center text-white">
          Piano
        </div>
      ),
    },
    {
      title: "Drums",
      description:
        "Learn how to play the drums. In this course, you will learn how to play beats and fills.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--gray-500))] flex items-center justify-center text-white">
          Drums
        </div>
      ),
    },
    {
      title: "Singing",
      description:
        "Learn how to sing. In this course, you will learn how to sing in tune and with good technique.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--purple-500))] flex items-center justify-center text-white">
          Singing
        </div>
      ),
    },
  ];
  

function ScrollColor () {
  return (
    <div>
        <StickyScroll content={musicContent} />
    </div>
  )
}

export default ScrollColor