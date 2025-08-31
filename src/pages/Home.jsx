import HeroSection from "../components/HeroSection.jsx";
import Skills from "../components/Skills.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";

export default function Home(){
  return (
    <div className="grid" style={{gap:"1.2rem"}}>
      <HeroSection/>
      <Skills/>
      <ProjectGrid initialFilter="All"/>
    </div>
  );
}
