import { NavLink, useLocation } from "react-router-dom";

export default function Navbar(){
  const { pathname } = useLocation();
  return (
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{fontWeight:700, letterSpacing:".5px"}}>Rashid Subhani</div>
      <div className="links">
        {[
          {to:"/",label:"Home"},
          {to:"/about",label:"About"},
          {to:"/projects",label:"Projects"},
          {to:"/contact",label:"Contact"},
        ].map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({isActive}) => isActive || pathname===l.to ? "active" : ""}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
