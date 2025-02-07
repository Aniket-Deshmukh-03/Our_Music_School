"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ContactForm } from "./ContactForm";
import { GoogleMap } from "./GoogleMap";
import { InfoSection } from "./InfoSection";

export default function ContactPage() {
  return (
    <div className="bg-black ">
      {/* Lamp Container */}
      <div className=" ">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" bg-gradient-to-br from-slate-300 to-slate-500 py-5 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            CONTACT US
          </motion.h1>
        </LampContainer>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-8 md:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <GoogleMap />
            <InfoSection />
          </div>
        </div>
      </div>
    </div>
  );
}

