import pfp from "../assets/pfp.jpeg";
function Hero() {
  return (
    <section style={styles.hero}>
      
      <div style={styles.left}>
        <h1 style={styles.title}>
          Hi, I'm <span style={styles.name} className="text-teal-600 dark:text-teal-400">Shubhangi</span>
        </h1>

        <p style={styles.subtitle}>
          Aspiring Engineer who enjoys building modern, scalable web applications.</p>
<p style={styles.subtitle}>Curious about systems, fundamentals and always up for leading ideas into reality — occasionally powered by ice cream
        </p>
      </div>

      <div style={styles.right}>
        <img
          src={pfp} // 👈 put your image in public folder
          alt="profile"
          style={styles.image}
        />
      </div>

    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
    // padding: "4rem 2rem",
    minHeight: "50vh",
  },

  left: {
    flex: 3,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },

  // name: {
  //   color: "oklch(70.4% 0.14 182.503)", // you can theme this later
  // },

  subtitle: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    maxWidth: "500px",
  },

  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default Hero;