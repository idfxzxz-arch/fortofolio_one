import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white dark:bg-gray-950 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Building modern digital products with clean design & powerful backend.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/hero.png" // ganti foto kamu
              className="rounded-3xl shadow-xl"
              alt="Profile"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Web Developer & Creative Technologist
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I'm a full-stack web developer focused on building fast, modern, and scalable digital products.
              I help businesses grow through professional websites, custom dashboards, and automation systems.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Specialized in <b>React</b>, <b>Laravel</b>, <b>Express.js</b>, <b>MySQL</b>, and system integration.
              I transform ideas into high-performance solutions.
            </p>

            {/* SELLING POINTS */}
            <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300">
              <li>✔ Modern UI / UX Design</li>
              <li>✔ Custom Web Systems</li>
              <li>✔ Business Automation</li>
              <li>✔ Fast Delivery</li>
            </ul>

            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            ["10+", "Projects"],
            ["2+", "Years Experience"],
            ["5+", "Tech Stack"],
            ["100%", "Client Satisfaction"]
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl text-center shadow"
            >
              <h4 className="text-3xl font-bold text-blue-500">{s[0]}</h4>
              <p className="text-gray-500 mt-2 text-sm">{s[1]}</p>
            </motion.div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="mt-28">

          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Experience Timeline
          </h3>

          <div className="max-w-3xl mx-auto space-y-10">

            {[
              ["2023", "Started Web Development Journey"],
              ["2024", "Built Business Websites & Monitoring Systems"],
              ["2025", "Full Stack Projects & Client Solutions"]
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <span className="font-bold text-blue-500">{t[0]}</span>
                <p className="text-gray-600 dark:text-gray-300">{t[1]}</p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}
