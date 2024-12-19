const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="hero-subtitle">
          A passionate developer crafting beautiful and functional web experiences
        </p>
        <a href="#projects" className="hero-button">
          View My Work
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;