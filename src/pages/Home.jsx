import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import { Download, ExternalLink } from "lucide-react";

function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-5 min-h-[650px]">
      <Card className="row-span-3 flex flex-col gap-4">
        <div className="text-xs px-4 py-2 bg-white/5 rounded-full flex items-center justify-center gap-2 w-max">
          <span className="size-1.5 bg-[#4e2b94] rounded-full"></span>
          Frontend Developer
        </div>
        <h1 className="text-4xl font-bold ">
          Hi, I'm <br /> Rahul Krishna S
        </h1>
        <p className="text-white/50 text-sm">
          Frontend Developer with nearly 2 years of experience building
          enterprise applications using JavaScript, TypeScript, Lit and Web
          Components. Currently expanding into React while creating modern and
          performant web experiences.
        </p>
        <div className="flex gap-2 items-center justify-start text-sm">
          <NavLink to="/projects" className="btn-primary flex items-center gap-2">View my work <ExternalLink size="18"/></NavLink>
          <button className="btn-secondary flex items-center gap-2">Download Resume <Download size="18"/></button>
        </div>
      </Card>
      <Card className="" label="STATUS" />
      <Card className="" label="EXPERIENCE" />
      <Card className="col-span-2" label="TECH STACK" />
      <Card className="row-span-2 col-span-2" label="PROJECTS" />
      <Card className="row-span-2" label="WHAT I DO" />
      <Card className="" label="SKILLS" />
      <Card className="" label="LETS CONNECT" />
    </div>
  );
}

export default Home;
