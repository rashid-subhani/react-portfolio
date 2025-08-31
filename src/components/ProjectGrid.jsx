import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { PROJECTS, ALL_TAGS } from "../data/projects.js";

export default function ProjectGrid({initialFilter="All"}){
  const [filter, setFilter] = useState(initialFilter);
  const filtered = useMemo(() => (
    filter==="All" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter))
  ), [filter]);

  return (
    <section className="card">
      <div style={{
        display:"flex",justifyContent:"space-between",alignItems:"center",gap:".8rem",flexWrap:"wrap"
      }}>
        <h2 style={{margin:0}}>Projects</h2>
        <select value={filter} onChange={e=>setFilter(e.target.value)} style={{maxWidth:250}}>
          {ALL_TAGS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid cols-3" style={{marginTop:"1rem"}}>
        {filtered.map(p => (
          <ProjectCard key={p.id} {...p}/>
        ))}
      </div>
    </section>
  );
}
