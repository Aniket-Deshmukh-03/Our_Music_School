import React from "react";

export function GoogleMap() {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
      <iframe
        title="Google Map"
        className="w-full h-full rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4917377.387928487!2d72.77524473106466!3d19.75147980425143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf708432c217%3A0xd37fd8dcb7e47430!2sMaharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1674497601023!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
