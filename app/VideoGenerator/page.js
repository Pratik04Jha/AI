'use client'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pl-60">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-zinc-800 text-white max-w-xl w-full rounded-2xl shadow-lg p-8 text-center space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="masked text-3xl md:text-4xl font-bold"
        >
          😞 No API Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 leading-relaxed"
        >
          I didn’t find any free API for video generation yet…  
          <br />
          When I find one—or buy one (idk man, I’m broke 🥲)—I promise I’ll make it soon...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-sm text-zinc-500 italic"
        >
          Thanks for understanding🤍
        </motion.div>
      </motion.div>
    </div>
  )
}

export default page
