import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Loader from "./components/Loader"
import Cursor from "./components/Cursor"

export default function App() {

  const [loaded, setLoaded] = useState(false)

  // loading intro
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1800)
  }, [])

  // anti copy
  useEffect(() => {
    const block = e => e.preventDefault()

    document.addEventListener("contextmenu", block)
    document.addEventListener("dragstart", block)
    document.addEventListener("selectstart", block)

    return () => {
      document.removeEventListener("contextmenu", block)
      document.removeEventListener("dragstart", block)
      document.removeEventListener("selectstart", block)
    }
  }, [])

  return (
    <>
      <Loader done={loaded} />
      <Cursor />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-black text-white min-h-screen"
      >
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </motion.div>
    </>
  )
}
