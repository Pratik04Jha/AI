"use client";
import ImagePreview from "../components/ImagePreview";
import ImageUpload from "../components/ImageUpload";
import { useState } from "react";
import { enhancedImageAPI } from "@/utils/enhanceImageApi";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center 
            h-screen px-4 py-8
            sm:pr-60 sm:pl-120 sm:py-15"
    >
      {/* Upload Animation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <ImageUpload UploadImageHandler={UploadImageHandler} />
      </motion.div>

      {/* Preview Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
