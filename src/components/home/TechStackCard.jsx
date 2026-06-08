import { SwatchBookIcon } from "lucide-react";
import Card from "../Card";
import PillChips from "../PillChips";
import { techStackData } from "../../data/home.json";

function TechStackCard() {
  return (
    <Card className="flex flex-col justify-between gap-3 md:col-span-2">
      <div className="text-xs flex items-center gap-2 text-white/50">
        <span>
          <SwatchBookIcon size="18" />
        </span>
        <span className="fontMonospace">TECH STACK</span>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-2 lg:w-[80%]">
        {techStackData.map((data) => (
          <PillChips label={data} />
        ))}
      </div>
    </Card>
  );
}

export default TechStackCard;
