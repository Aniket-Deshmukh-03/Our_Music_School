import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import ScrollColor from "@/components/ScrollColor";
import UpcomingBatches from "@/components/UpcomingBatches";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.2] text-white">
      <HeroSection />
      <FeaturedCourses />
      <ScrollColor />
      <MovingCards />
      <UpcomingBatches />
      <Instructors />
      <Footer />
    </main>
  );
}
