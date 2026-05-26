import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navbar({ isDarkMode, setDarkMode }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        <div style={styles.sections} className="text-base font-medium font-serif">

          <a href="#home" style={styles.logo}>Home</a>
          <a href="#experience" style={styles.logo}>Experience</a>
          <a href="#projects" style={styles.logo}>Projects</a>
          <a href="#achievements" style={styles.logo}>Achievements</a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            Resume
          </a>

        </div>

        <DarkModeSwitch
          checked={isDarkMode}
          onChange={setDarkMode}
          size={30}
        />

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "1rem 0",
    backdropFilter: "blur(10px)",
  },

  container: {
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sections: {
    display: "flex",
    gap: "2rem",
  },

  logo: {
    margin: 0,
    cursor: "pointer",
    textDecoration: "none",   // 👈 remove underline
    color: "inherit",         // 👈 keep text color same
  },
};

export default Navbar;