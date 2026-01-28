import { motion } from "framer-motion"

export default function Loader({ done }) {
  if (done) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-cyan-400 animate-pulse">
        Loading...
      </h1>
    </motion.div>
  )
}
