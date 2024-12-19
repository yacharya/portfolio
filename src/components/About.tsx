const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "CSS",
    "Next.js",
    "Git",
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-grid">
          <div>
            <p className="about-text">
              I'm a full-stack developer with a passion for creating elegant
              solutions to complex problems. With several years of experience in
              web development, I specialize in building responsive and intuitive
              user interfaces.
            </p>
            <p className="about-text">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              blog posts and mentoring.
            </p>
          </div>
          <div>
            <h3 className="skills-title">Skills</h3>
            <div className="skills-container">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;