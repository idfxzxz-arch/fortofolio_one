import { useEffect, useState } from "react"

export default function Hero() {
  const name = "idxxd"
  const [text, setText] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [stats, setStats] = useState({ projects: 0, years: 0, clients: 0 })

  // Typing effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(name.slice(0, i + 1))
      i++
      if (i === name.length) clearInterval(interval)
    }, 80)

    return () => clearInterval(interval)
  }, [])

  // Parallax
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Stats counter
  useEffect(() => {
    let p = 0
    let y = 0
    let c = 0

    const timer = setInterval(() => {
      if (p < 12) p++
      if (y < 2) y++
      if (c < 5) c++

      setStats({ projects: p, years: y, clients: c })

      if (p === 12 && y === 2 && c === 5) clearInterval(timer)
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative pt-40 pb-32 max-w-6xl mx-auto px-4 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block">Hi, I'm</span>

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {text}
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl text-lg">
            Frontend Developer & Network Engineer — building modern websites,
            dashboards, and monitoring systems.
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-[0_0_30px_rgba(59,130,246,.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-white transition"
            >
              Contact Me
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 flex gap-10 text-center">
            <div>
              <h3 className="text-3xl font-bold">{stats.projects}+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{stats.years}+</h3>
              <p className="text-gray-400 text-sm">Years</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{stats.clients}+</h3>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative flex justify-center"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          {/* glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>

          <img
            src="/hero.png"
            alt="me"
            className="relative w-[280px] md:w-[360px] animate-float drop-shadow-[0_0_40px_rgba(59,130,246,.6)]"
          />
        </div>

      </div>
    </section>
  )
}
