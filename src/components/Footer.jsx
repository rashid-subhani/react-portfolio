export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
      <span>© {year} Rashid Subhani</span>
      <div className="links">
        <a href="https://github.com/rashid-subhani" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/rashid-subhani/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
