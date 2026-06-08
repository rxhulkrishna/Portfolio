import { CheckCircle } from "lucide-react";
import Card from "../Card";
import { learningData } from "../../data/home.json";

function CurrentFocusCard() {
  return (
    <Card className="flex flex-col gap-4 lg:row-span-2 gap-2">
      <div className="text-xs flex items-center gap-2 text-white/50 lg:mb-5">
        <span>
          <CheckCircle size="18" />
        </span>
        <span className="fontMonospace">CURRENTLY LEARNING</span>
      </div>
      <div className="flex flex-col gap-3">
        {learningData.map((data) => (
          <div className="flex flex-col text-sm gap-2">
            <span className="font-semibold flex items-center gap-2">
              <span className="size-2 bg-[#4e2b94] rounded-full"></span>
              {data.title}
            </span>
            <span className="text-white/50">{data.description}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CurrentFocusCard;
