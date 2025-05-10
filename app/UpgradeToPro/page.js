'use client'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:pl-60">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black max-w-3xl w-full rounded-2xl p-8 shadow-xl text-center space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="masked text-4xl md:text-5xl font-bold"
        >
          Upgrade to Pro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 leading-relaxed"
        >
          Right now, I’m building websites from scratch - every line of code, every feature.
          
          Slowly - slowly, I’ll improve them - one upgrade by one.
          <br />
          After that, I’ll start monetizing them - after learning some other things.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 leading-relaxed"
        >
          Right now in this website, there is still a lot to do like I still have to integrate databases, polish the UI, fix bugs, and
          add powerful new features. There's a lot to do.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 leading-relaxed italic"
        >
          Once enough people start using these tools, and the platform becomes solid and everything goes right  
          But right now I am just building and learning stuffs for fun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="pt-4"
        >
          <span className="text-sm text-zinc-500">~ Pratik Jha</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default page
