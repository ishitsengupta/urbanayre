"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const [clicks, setClicks] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [glitch, setGlitch] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    const newCount = clicks + 1
    setClicks(newCount)

    // glitch effect every click
    setGlitch(true)
    setTimeout(() => setGlitch(false), 200)

    if (newCount >= 50) {
      setShowModal(true)
    }
  }

  const goHome = () => {
    router.push("/")
  }

  return (
    <div className="flex flex-col mx-15 my-15 justify-center items-center relative min-h-[70vh] font-serif">
      <h1
        onClick={handleClick}
        className={`text-8xl font-bold cursor-pointer select-none transition-all ${
          glitch ? "translate-x-1 -translate-y-1 skew-x-2 text-dark-accent dark:text-accent" : "text-accent dark:text-dark-accent"
        }`}
        
      >
        404
      </h1>

      <p className="mt-4 font-[500] text-[20px] font-serif text-text-secondary dark:text-dark-secondary">Not Found</p>
      <p className="mt-1 font-[500] text-[20px] font-serif text-text-secondary dark:text-dark-secondary">
        Did You Mean: <a className="text-accent dark:text-dark-accent" href="https://youtu.be/dQw4w9WgXcQ" target="_blank">https://youtu.be/dQw4w9WgXcQ</a> 
      </p>

      <p className="mt-6 text-xs opacity-50 text-accent dark:text-dark-accent">
        clicks: {clicks}/50
      </p>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden z-50">
          <div className="bg-bg dark:bg-dark-bg-2 rounded-2xl p-8 text-center shadow-xl max-w-sm">
            <h2 className="text-2xl font-serif text-text-primary dark:text-dark-text-primary font-bold mb-2">Here is The Way</h2>
            <p className="mb-6">Let's Take You Back Home</p>
            <button
              onClick={goHome}
              className="px-6 py-2 rounded-lg bg-accent dark:bg-dark-accent dark:text-dark-text-primary text-text-primary font-semibold hover:opacity-80 cursor-pointer hover:scale-[1.05]"
            >
              Home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}