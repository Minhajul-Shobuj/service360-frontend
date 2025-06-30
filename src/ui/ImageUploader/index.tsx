"use client";
import Image from "next/image";
import React from "react";

const ImageUploader = () => {
  const [iamgefiles, setImageFiles] = React.useState<File[]>([]);
  const [iamgePreview, setiamgePreview] = React.useState<string[]>([]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files![0];
    if (files) {
      setImageFiles((prev) => [...prev, files]);
      const reader = new FileReader();
      reader.onload = () => {
        setiamgePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(files);
      event.target.value = "";
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-black">
        <input
          onChange={handleFileChange}
          type="file"
          multiple
          accept="image/*"
          id="img-uploader"
          className="hidden"
        />
        <label htmlFor="img-uploader">Upload Image</label>
        <div>
          {iamgePreview.map((preview, idx) => (
            <Image
              src={preview}
              key={idx}
              height={100}
              width={100}
              alt="image"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
