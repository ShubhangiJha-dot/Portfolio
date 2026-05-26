import cert from "../assets/intern.pdf";
import { useState } from "react";

const experiences = [
  {
    role: "AI-powered Full-Stack Development Intern",
    company: "Dept. of AI&DS, IGDTUW",
    duration: "June 2025 – July 2025",
    location: "Delhi, India",
    description:
      "Built backend APIs ",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    certificate: cert,
  },
];

function WorkSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    <section className="mt-10 pb-8">
      <h1 className="text-2xl font-bold mb-8">Experience</h1>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
              p-6 rounded-xl border
              border-gray-300 dark:border-gray-700
            
              shadow-sm hover:shadow-md
              transition
            "
          >
            {/* Top Row */}
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h2 className="text-lg font-semibold text-teal-600 dark:text-teal-400">
                  {exp.role}
                </h2>
                <p className="text-sm text-zinc-900 dark:text-gray-300">
                  {exp.company}
                </p>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              {exp.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-2 py-1 rounded
                    bg-gray-200 dark:bg-gray-700
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Certificate */}
            {exp.certificate && (
              <button
                onClick={() => setSelectedCert(exp.certificate)}
                className="inline-block mt-4 text-sm underline"
              >
                View Certificate →
              </button>
            )}
          </div>
        ))}
      </div>
{selectedCert && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setSelectedCert(null)}
  >
    <div
      className="bg-white dark:bg-gray-900 w-[90%] h-[90%] rounded-lg overflow-hidden flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex justify-end p-3 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setSelectedCert(null)}
          className="text-xl font-bold hover:opacity-70"
        >
          ✕
        </button>
      </div>

      {/* PDF Viewer */}
      <iframe
        src={selectedCert}
        className="flex-1 w-full"
        title="Certificate"
      />
    </div>
  </div>
)}
    </section>
  );

}
export default WorkSection;