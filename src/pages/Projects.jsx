import ProjectGrid from "../components/ProjectGrid.jsx";

export default function Projects(){
  return (
    <>
      <ProjectGrid/>
      <section className="card">
        <h2 style={{marginTop:0}}>How it’s built</h2>
        <p style={{color:"var(--muted)"}}>
          This portfolio is a React + Vite app with client-side routing and a filterable projects grid.
          Data lives in <code>src/data/projects.js</code> and can be swapped for a GitHub API feed later.
        </p>
      </section>
    </>
  );
}
