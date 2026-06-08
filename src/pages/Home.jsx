import CurrentFocusCard from "../components/home/CurrentFocusCard";
import ExperienceCard from "../components/home/ExperienceCard";
import HeroCard from "../components/home/HeroCard";
import LetsConnectCard from "../components/home/LetsConnectCard";
import Projects from "../components/home/Projects";
import SkillsCard from "../components/home/SkillsCard";
import StatusCard from "../components/home/StatusCard";
import TechStackCard from "../components/home/TechStackCard";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:auto-rows-[170px] gap-5">
      <HeroCard />
      <StatusCard />
      <ExperienceCard />
      <TechStackCard />
      <CurrentFocusCard />
      <Projects />
      <SkillsCard />
      <LetsConnectCard />
    </div>
  );
}

export default Home;
