export default function About(){
  return (
    <section className="card" style={{display:"grid",gap:"1rem"}}>
      <h1 style={{margin:"0"}}>About Me</h1>
      <p>
        I’m a full-stack developer focused on building accessible, performant web apps.
        I enjoy turning complex requirements into intuitive user experiences and robust APIs.
      </p>
      <ul style={{margin:0, paddingLeft:"1.2rem", color:"var(--muted)"}}>
        <li>Stack: React, Node.js, Express, MySQL, Sequelize</li>
        <li>Testing curiosity: Playwright, Vitest (roadmap)</li>
        <li>Currently exploring: React performance and CI/CD</li>
      </ul>
    </section>
  );
}
