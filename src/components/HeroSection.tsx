import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[35rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <div className="p-4 relative z-10 w-full text-center">

        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ff00a9] to-[#ff6c00]"> {/* b from-neutral-50 to-neutral-400 */}
            Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Learn music theory, composition, song writing, production, and business. Also get access to our free resources.</p>
        <div className="mt-4">
            <Link href={"#"}>
                <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                Explore Courses
                </Button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default HeroSection