"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const movingCards = [
  {
    quote: "“The only way to do great work is to love what you do.”",
    name: "Jasprit Bumrah",
    title: "Guitarist",
  },
  {
    quote: "The difference between ordinary and extraordinary is that little extra.",
    name: "Virat Kohli",
    title: "Singer",
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    name: "Rohit Sharma",
    title: "Pianist",
  },
  {
    quote: "The best way to predict the future is to create it.",
    name: "MS Dhoni",
    title: "Drummer",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    name: "Sachin Tendulkar",
    title: "Bassist",
  }
] 
function MovingCards() {
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Voices Of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={movingCards} 
          direction="left" speed="slow"/>
        </div>
      </div>
    </div>
  )
}

export default MovingCards