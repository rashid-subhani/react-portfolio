const SKILLS = [
  {name:"JavaScript (ES202x)"},
  {name:"React + Router"},
  {name:"Node.js / Express"},
  {name:"MySQL / Sequelize"},
  {name:"Auth (JWT, bcrypt)"},
  {name:"HTML/CSS, Responsive UI"},
];

export default function Skills(){
  return (
    <section className="card">
      <h2 style={{marginTop:0}}>Skills & Tools</h2>
      <div className="grid cols-3">
        {SKILLS.map(s => (
          <div key={s.name} className="card" style={{padding:".8rem"}}>
            {s.name}
          </div>
        ))}
      </div>
    </section>
  );
}
