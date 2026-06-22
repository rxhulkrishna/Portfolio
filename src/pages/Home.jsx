import { projectsData, socialData } from "../data/home.json";

function Home() {
  function numberFormat(num) {
    return String(num).padStart(2, "0");
  }
  return (
    <div className="flex flex-col gap-5 md:gap-8 my-5 md:mt-8 w-full">
      <div className="flex flex-col gap-3">
        <span className="text-comment">~/portfolio $</span>
        <header className="text-hero text-4xl">Rahul Krishna S</header>
        <span className="flex flex-col gap-3 md:flex-row ">
          <div className="flex flex-wrap gap-3">
            <span>frontend dev</span>
            <span className="text-purple-accent">
              · js / ts / react / lit ·
            </span>
          </div>
          <span>bangalore</span>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-comment">//about</span>
        <span className="flex flex-wrap md:w-125">
          Two years building web interfaces. Comfortable with Javascript,
          Typescript, Lit and React. Looking for frontend roles at
          product-focused startups.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-comment">//projects</span>
        {projectsData.map((data, idx) => (
          <div>
            {numberFormat(idx + 1)} -{" "}
            <span className="text-purple-accent hover:cursor-pointer hover:text-purple-hover">
              {data.name}
            </span>{" "}
            • <span className="lowercase">{data.techs}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-divider"></div>
      <div className="flex flex-row gap-5">
        {socialData.map((data) => (
          <a
            href={data.url}
            target="_blank"
            className="hover:text-purple-accent"
          >
            {data.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
