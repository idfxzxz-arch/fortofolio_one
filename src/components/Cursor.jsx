import { useEffect, useState } from "react"

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      setPos({ x: e.clientX, y: e.clientY })
    })
  }, [])

  return (
    <div
      className="fixed w-6 h-6 rounded-full bg-cyan-400 blur-xl pointer-events-none"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%,-50%)"
      }}
    />
  )
}
