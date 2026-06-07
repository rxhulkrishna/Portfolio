import Card from "../components/Card";
import CurrentFocusCard from "../components/home/CurrentFocusCard";
import ExperienceCard from "../components/home/ExperienceCard";
import HeroCard from "../components/home/HeroCard";
import Projects from "../components/home/Projects";
import StatusCard from "../components/home/StatusCard";
import TechStackCard from "../components/home/TechStackCard";

function Home() {
  return (
    <div className="grid grid-cols-[1.2fr_1fr_1fr] auto-rows-[160px] gap-5">
      <HeroCard />
      <StatusCard />
      <ExperienceCard />
      <TechStackCard />
      <CurrentFocusCard />
      <Projects />
      <Card className="" label="SKILLS" />
      <Card className="" label="LETS CONNECT" />
    </div>
  );
}

export default Home;
