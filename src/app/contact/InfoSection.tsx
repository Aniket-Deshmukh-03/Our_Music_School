import React from "react";
import { MapPin, Phone, Mail } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="space-y-4 text-white" >
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
        <p> Maharashtra.</p>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5 text-cyan-500" />
        <p>+91 01234 56789</p>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5 text-cyan-500" />
        <p>aniketsd199@gmail.com</p>
      </div>
    </div>
  );
}

