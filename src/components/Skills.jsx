  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JavaScript",
    "C++",
    "Git",
  ];
function SkillsSection() {
    return (
        <section className="mt-10 pb-8">
            <h1 className="text-2xl font-bold mb-8">Skills</h1>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-teal-200 text-teal-800 dark:bg-teal-800 dark:text-teal-100 px-4 py-2 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}
export default SkillsSection;