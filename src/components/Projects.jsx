export default function Projects() {

  const projects = [1,2,3]

  return (
    <section id="projects" className="mt-32 max-w-6xl mx-auto px-4">

      <h3 className="text-3xl font-bold mb-10">Projects</h3>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map(i => (
          <div key={i} className="border border-white/10 rounded-xl p-6 hover:border-white transition">
            <div className="h-40 bg-white/5 rounded-lg mb-4"></div>

            <h4 className="font-semibold text-lg">Project {i}</h4>

            <p className="text-gray-400 text-sm mt-2">
              React • Tailwind • Express
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}
