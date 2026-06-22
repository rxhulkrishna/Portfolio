function About() {
  return (
    <div className="flex flex-col gap-5 md:gap-5 my-5 md:mt-8 w-full lg:overflow-hidden">
      <div className="flex flex-col gap-3">
        <span className="text-comment">//about me</span>

        <header className="text-hero text-4xl">Rahul Krishna S</header>
        <span className="flex flex-col gap-3 ">
          <div className="flex flex-wrap gap-3">
            <span>frontend developer at TCS</span>
            <span className="text-purple-accent">1.8 years experience</span>
          </div>
          <span>
            Building and modernizing enterprise web applications for a leading
            European banking client.
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-comment">//work</span>
        <div className="flex flex-col gap-3">
          <span className="text-purple-accent">Systems Engineer</span>
          Frontend Development · TCS · Nov 2024 - present
        </div>
        <ul className="flex flex-wrap gap-3 md:w-125 list-disc p-5">
          <li>
            Present Sole frontend dev on an Insurance Platform building{" "}
            <span className="text-purple-accent">15+ </span>screens
            independently under a 1-month deadline
          </li>
          <li>
            Built <span className="text-purple-accent">10+ </span>reusable Lit
            components for a Loan Management App, migrating from legacy monolith
            to component-based architecture
          </li>
          <li>
            Integrated RESTful APIs with complex form-driven UI flows across
            multiple enterprise screens
          </li>
        </ul>
      </div>
      <div className="w-full h-px bg-divider"></div>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-[1.5fr_1fr] md:gap-10 md:items-start md:justify-start">
        <div className="flex flex-col gap-3">
          <span className="text-comment">//education</span>
          <div className="flex flex-wrap justify-between">
            <span>MCA</span>
            <span>College of Engineering, Trivandrum · 2024 · 91.2%</span>
          </div>
          <div className="flex flex-wrap justify-between">
            <span>BCA </span>{" "}
            <span>Christ Nagar College, Trivandrum · 2022 · 79.2%</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-comment">//skills</span>
          <div className="flex flex-col gap-1">
            <span>
              <span className="text-comment">lang</span> — javascript,
              typescript
            </span>
            <span>
              <span className="text-comment">frameworks</span> — lit, web
              components, <span className="text-purple-accent">react</span>
            </span>
            <span>
              <span className="text-comment">styling</span> — tailwind css,
              responsive design
            </span>
            <span>
              <span className="text-comment">tools</span> — git, github actions,
              ci/cd
            </span>
            <span>
              <span className="text-comment">methods</span> — agile, scrum
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
