import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const sections = ["home", "projects", "contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [hidden, setHidden] = useState(false)

  // Active section
  useEffect(() => {
    const handler = () => {
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id)
        }
      })
    }

    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Hide while scrolling, show after stop
  useEffect(() => {
    let timer

    const onScroll = () => {
      setHidden(true)
      clearTimeout(timer)
      timer = setTimeout(() => setHidden(false), 300)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        hidden ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 mt-4">

        <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,.25)]">

          {/* Neon glow */}
          <div className="absolute inset-0 rounded-2xl blur-xl bg-blue-500/10 -z-10" />

          <div className="flex items-center justify-between px-6 py-4">

            <h1 className="font-bold text-xl tracking-wide">
              Tegar<span className="text-blue-500">.</span>
            </h1>

            {/* Desktop */}
            <div className="hidden md:flex gap-10 text-sm">

              {sections.map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`relative capitalize ${
                    active === item ? "text-blue-400" : "text-white"
                  }`}
                >
                  {item}

                  {active === item && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                  )}
                </a>
              ))}

            </div>

            {/* Mobile */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">

              {sections.map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className={`block capitalize ${
                    active === item ? "text-blue-400" : ""
                  }`}
                >
                  {item}
                </a>
              ))}

            </div>
          )}

        </div>

      </div>
    </nav>
  )
}
