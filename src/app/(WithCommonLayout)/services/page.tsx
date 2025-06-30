"use client";

import ImageUploader from "@/ui/ImageUploader";

const Services = () => {
  return (
    <>
      <div className="bg-red-100 h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">Services Page</h1>
        <ImageUploader />
      </div>
    </>
  );
};

export default Services;
