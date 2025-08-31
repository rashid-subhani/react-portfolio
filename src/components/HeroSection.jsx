export default function HeroSection(){
  return (
    <section className="hero card">
      <div>
        <span className="badge">Available for full-time roles</span>
        <h1>Hi, I’m Rashid — a full-stack developer who loves clean UX and reliable APIs.</h1>
        <p>
          I build performant web apps with React, Node.js, and SQL. Scroll down to see my work,
          or jump to the projects page to explore eight weekly challenges.
        </p>
      </div>
      <div className="tags">
        <span className="badge">React</span>
        <span className="badge">Node.js</span>
        <span className="badge">MySQL</span>
        <span className="badge">Sequelize</span>
        <span className="badge">Auth/JWT</span>
      </div>
      <div style={{display:"flex",gap:".7rem",marginTop:".5rem"}}>
        <a className="btn brand" href="/projects">View Projects</a>
        <a className="btn" href="/contact">Contact Me</a>
      </div>
    </section>
  );
}
