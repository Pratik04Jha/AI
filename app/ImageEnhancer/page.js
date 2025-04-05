"use client";
import ImagePreview from "../components/ImagePreview";
import ImageUpload from "../components/ImageUpload";
import { useState } from "react";
import { enhancedImageAPI } from "@/utils/enhanceImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setloading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center 
            h-screen px-4 py-8  
            sm:pr-60 sm:pl-120  sm:py-15"
    >
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </div>
  );
};

export default Home;
