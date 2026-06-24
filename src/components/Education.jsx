import igdtuw from "../assets/unilogo.png";
const education = [
  {
    uni: "Indira Gandhi Delhi Technical University for Women",
    degree: "Bachelor of Technology",
    course:"CSE-AI",
    cgpa:"9.05/10",
    duration: "2024– 2028(expected)",
    location: "Delhi, India",
  },
];

function EducationSection() {
    return(
        <section className="mt-10 pb-8" >
            <h1 className="text-2xl font-bold mb-8" style={styles.title}>Education</h1>
            {education.map((edu, index) => (
                <div key={index} 
            className="
              p-6 rounded-xl border
              border-gray-300 dark:border-gray-700
            
              shadow-sm hover:shadow-md
              transition
            "
            style={styles.edu}
                >
                    <div style={styles.left}>

                        <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">{edu.uni}</h3>
                        {/* <p className="text-lg">{edu.degree} in {edu.course}</p>
                        <p className="text-md">CGPA: {edu.cgpa}</p> */}
                        <div className="flex justify-between items-center">
                        <p className="text-lg">
                            {edu.degree} in {edu.course}
                        </p>
                        <p className="text-md pr-4 text-teal-600 dark:text-teal-400 font-semibold">
                            CGPA: {edu.cgpa}
                        </p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{edu.duration}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{edu.location}</p>
                    </div>
                    <div style={styles.right}>
                        <img
                            src={igdtuw} // 👈 put your image in public folder
                            alt="University Logo"
                            style={styles.image}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}

const styles = {
  edu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
    // padding: "4rem 2rem",
    // minHeight: "50vh",
  },

  left: {
    flex: 4,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  title: {
    // fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};
export default EducationSection;
