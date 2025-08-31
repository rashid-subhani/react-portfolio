export default function ProjectCard({title, summary, tags, repo, demo}){
  return (
    <article className="card" style={{display:"grid",gap:".6rem"}}>
      <h3 style={{margin:"0 0 .2rem"}}>{title}</h3>
      <p style={{color:"var(--muted)", margin:0}}>{summary}</p>
      <div className="tags">
        {tags.map(t => <span className="badge" key={t}>{t}</span>)}
      </div>
      <div style={{display:"flex",gap:".6rem"}}>
        {repo && <a className="btn" href={repo} target="_blank" rel="noreferrer">Repo</a>}
        {demo && <a className="btn" href={demo} target="_blank" rel="noreferrer">Live</a>}
      </div>
    </article>
  );
}
