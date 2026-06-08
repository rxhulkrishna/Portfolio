import { Mail, Send } from "lucide-react";
import Card from "../Card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialData } from "../../data/home.json";

const icons = {
  github: <FaGithub size="18" />,
  linkedin: <FaLinkedin size="18" />,
  email: <Mail size="18" />,
};

function LetsConnectCard() {
  return (
    <Card className="flex flex-col gap-2 justify-between">
      <div className="text-xs flex items-center gap-2 text-white/50 ">
        <span>
          <Send size="18" />
        </span>
        <span className="fontMonospace">LET'S CONNECT</span>
      </div>
      <div className="flex flex-col justify-start gap-5">
        <span className="text-sm">
          I'm always open to discussing new opportunities.
        </span>
        <div className="rowFlex gap-5">
          {socialData.map((data) => (
            <a
              target="_blank"
              title={data.label}
              href={data.url}
              className="border border-white/10 rounded-xl bg-white/[0.035] p-2 cursor-pointer"
            >
              {icons[data.type]}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default LetsConnectCard;
