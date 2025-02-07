"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"
// import Image from "next/image";

const instructors = [
    {   
        id: 1,
        name: "Jasprit Bumrah",
        designation: "Guitarist",
        image: "/images/jasprit.jpg",
    },
    {
        id: 2,
        name: "Virat Kohli",
        designation: "Singer",
        image: "/images/virat.jpg"
    },
    {
        id: 3,
        name: "Rohit Sharma",
        designation: "Pianist",
        image: "/images/rohit.jpeg"
    },
    {
        id: 4,
        name: "MS Dhoni",
        designation: "Drummer",
        image: "/images/dhoni.jpg"
    },
    {
        id: 5,
        name: "Sachin Tendulkar",
        designation: "Bassist",
        image: "/images/sachin.jpg"
    }
];


function Instructors() {
  return (
    <div className="relative h-[35rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8"> 
                Meet Our Instructors 
            </h2>
            <p className="px-5 lg:px-44 text-base md:text-lg text-white text-center mb-4"> 
                Discover the best instructors in the world. Our team of experienced professionals is dedicated to helping you achieve your musical goals. Whether you're a beginner or an advanced musician, our instructors are here to guide you every step of the way.
            </p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors}/>
            </div>
            {/* <div className="flex flex-row items-center justify-center mb-10 w-full">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="flex flex-col items-center text-center text-white"
            >
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{instructor.name}</h3>
              <p className="text-sm">{instructor.designation}</p>
            </div>
          ))}
        </div> */}
        </WavyBackground>
    </div>
  )
}

export default Instructors