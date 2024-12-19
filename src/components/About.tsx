const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Next.js",
    "Git",
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-secondary mb-6">
              I'm a full-stack developer with a passion for creating elegant
              solutions to complex problems. With several years of experience in
              web development, I specialize in building responsive and intuitive
              user interfaces.
            </p>
            <p className="text-lg text-secondary">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              blog posts and mentoring.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full text-secondary shadow-sm"
                >
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