import AcceptanceLetter from "../assets/Acceptance.pdf";
import ResearchPaper from "../assets/research.pdf";

const achievements = [
  {
    title: "Research Paper Accepted – ICOIICS",
    description:
      "My research paper was accepted for publication at the ICOIICS conference.",
    extra: "Topic: A  Comparative  Study  of  Supervised  Machine  Learning  Models  for  Stroke  Risk Prediction",
    paper: ResearchPaper,
    letter: AcceptanceLetter,
    type: "Research Publication",
  },
];

function Achievements(){
    return(
        <div>
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                    <div key={index} className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <h3 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">{achievement.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{achievement.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{achievement.extra}</p>
                        <div className="flex gap-4">
                            <a
                                href={achievement.paper}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black dark:text-white hover:text-teal-500"
                            >
                                View Paper
                            </a>
                            <a
                                href={achievement.letter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black dark:text-white hover:text-teal-500"
                            >
                                View Acceptance Letter
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )   
}

export default Achievements;