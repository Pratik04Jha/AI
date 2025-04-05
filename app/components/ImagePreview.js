"use client"

import Loading from "./Loading"
import { useState } from "react"

const ImagePreview = (props) => {
  const [cursorPos1, setCursorPos1] = useState({ x: 0, y: 0 })
  const [cursorPos2, setCursorPos2] = useState({ x: 0, y: 0 })
  const [hovering1, setHovering1] = useState(false)
  const [hovering2, setHovering2] = useState(false)

  // Track cursor inside the first div
  const handleMouseMove1 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos1({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  // Track cursor inside the second div
  const handleMouseMove2 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos2({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div className="flex justify-center h-screen pb-15 text-white w-full">
      <div className="h-[90%] mt-3 w-full flex flex-col md:flex-row justify-center items-center gap-5">
        {/* Uploaded Image */}
        <div
          className="h-[45%] md:h-[100%] w-full bg-zinc-800 rounded-lg overflow-hidden relative"
          onMouseMove={handleMouseMove1}
          onMouseEnter={() => setHovering1(true)}
          onMouseLeave={() => setHovering1(false)}
        >
          
          <div
            className="absolute bg-zinc-200 blur-[200px] opacity-10 rounded-full transition-all duration-50"
            style={{
              top: `${cursorPos1.y - 250}px`,
              left: `${cursorPos1.x - 250}px`,
              width: "500px",
              height: "500px",
              pointerEvents: "none",
            }}
          />

          <div className="w-full h-[10%] flex items-center justify-center">
            <h1>Uploaded image</h1>
          </div>
          <div className="h-[90%] w-full flex justify-center items-center">
            {props.uploaded ? (
              <img src={props.uploaded || "/placeholder.svg"} alt="" className="max-h-full max-w-full object-contain" />
            ) : (
              <p className="text-gray-400">No Image Selected</p>
            )}
          </div>
        </div>

        {/* Enhanced Image */}
        <div
          className="h-[45%] md:h-[100%] w-full bg-zinc-800 rounded-lg overflow-hidden relative"
          onMouseMove={handleMouseMove2}
          onMouseEnter={() => setHovering2(true)}
          onMouseLeave={() => setHovering2(false)}
        >
          {/* Shiny Effect */}
          <div
            className="absolute bg-zinc-200 blur-[200px] opacity-10 rounded-full transition-all duration-50"
            style={{
              top: `${cursorPos2.y - 250}px`,
              left: `${cursorPos2.x - 250}px`,
              width: "500px",
              height: "500px",
              pointerEvents: "none",
            }}
          />

          <div className="w-full h-[10%] flex items-center justify-center">
            <h1>Enhanced image</h1>
          </div>
          <div className="h-[90%] w-full flex justify-center items-center">
            {props.enhanced && !props.loading ? (
              <img src={props.enhanced || "/placeholder.svg"} alt="" className="max-h-full max-w-full object-contain" />
            ) : props.loading ? (
              <Loading />
            ) : (
              <div className="text-gray-400">No Enhanced Image</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview

