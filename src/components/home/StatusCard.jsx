import { Crosshair } from "lucide-react";
import Card from "../Card";
import { statusData } from "../../data/home.json";

function StatusCard() {
  return (
    <Card className="flex flex-col gap-2 justify-between">
      <div className="text-xs flex items-center gap-2 text-white/50">
        <span>
          <Crosshair size="18" />
        </span>
        <span className="fontMonospace">STATUS</span>
      </div>
      <div className="text-xl font-semibold flex items-center gap-2">
        <span className="size-1.5 bg-green-500 rounded-full"></span>
        {statusData.title}
      </div>
      <span className="text-sm text-white/50">{statusData.description}</span>
    </Card>
  );
}

export default StatusCard;
