import {
  profile,
  experience,
  skills,
  projects,
  education,
  awards,
  contact,
} from "../data";

export const About = () => (
  <>
    <div className="card term">
      <div className="term__bar">bash — 80×20</div>
      <div className="term__body">
        <div className="term__prompt">
          <span className="u">
            {profile.handle}@{profile.host}
          </span>
          <span className="p">:~$</span> whoami
        </div>
        <h1 className="term__name">{profile.name}</h1>
        <div className="term__role">
          {profile.role} · {profile.stack}
        </div>
        <p className="term__bio">
          {profile.bio.map((line, i) => (
            <span key={i}>
              {line}
              {i < profile.bio.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  </>
);

export const Experience = () => (
  <>
    <span className="pill">experience.ts</span>
    <h2 className="section__heading">Where I've worked</h2>
    <p className="section__sub">A running log, most recent first.</p>

    <div className="stack">
      {experience.map((job) => (
        <div key={job.role + job.period} className="card job">
          <div className="job__top">
            <span className="job__role">{job.role}</span>
            <span className="job__period">{job.period}</span>
          </div>
          <div className="job__org">
            {job.org} · {job.location}
          </div>
          <ul className="job__points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

export const Skills = () => {
  const rows = Object.entries(skills);
  return (
    <>
      <span className="pill">skills.json</span>
      <h2 className="section__heading">What I work with</h2>
      <p className="section__sub">The tools I reach for most.</p>

      <div className="card json">
        <div>{"{"}</div>
        {rows.map(([key, values]) => (
          <div key={key} className="json__row">
            <span className="json__key">
              <span className="q">"</span>
              {key}
              <span className="q">"</span>
            </span>
            <span>:</span>
            {values.map((value) => (
              <span key={value} className="chip">
                {value}
              </span>
            ))}
          </div>
        ))}
        <div>{"}"}</div>
      </div>
    </>
  );
};

export const Projects = () => (
  <>
    <span className="pill">projects/</span>
    <h2 className="section__heading">Selected work</h2>
    <p className="section__sub">A few things I've shipped and written about.</p>

    <div className="grid">
      {projects.map((project) => (
        <a
          key={project.name}
          className="card project"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="project__name">
            {project.name}
            <span className="arrow">↗</span>
          </div>
          <p className="project__blurb">{project.blurb}</p>
          <div className="project__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </>
);

export const Education = () => (
  <>
    <span className="pill">education.md</span>
    <h2 className="section__heading">Education</h2>
    <p className="section__sub">Where I studied.</p>

    <div className="stack">
      {education.map((item) => (
        <div key={item.degree} className="card job">
          <div className="job__top">
            <span className="job__role">{item.degree}</span>
            <span className="job__period">{item.period}</span>
          </div>
          <div className="job__org">
            {item.school} · {item.location}
          </div>
        </div>
      ))}
    </div>
  </>
);

export const Awards = () => (
  <>
    <span className="pill">awards.md</span>
    <h2 className="section__heading">Awards</h2>
    <p className="section__sub">Recognition along the way.</p>

    <div className="stack">
      {awards.map((item) => (
        <div key={item.title} className="card job">
          <div className="job__top">
            <span className="job__role">{item.title}</span>
            <span className="job__period">{item.period}</span>
          </div>
          <p className="award__detail">{item.detail}</p>
        </div>
      ))}
    </div>
  </>
);

export const Contact = () => (
  <>
    <span className="pill">contact.md</span>
    <h2 className="section__heading">Get in touch</h2>

    <div className="card contact-block">
      {contact.map((row) => (
        <div key={row.key} className="contact-block__row">
          <span className="k">{row.key}</span>
          <span className="sep">→</span>
          {row.href ? (
            <a
              href={row.href}
              {...("download" in row && row.download
                ? { download: "" }
                : { target: "_blank", rel: "noreferrer" })}
            >
              {row.value}
            </a>
          ) : (
            <span className="v">{row.value}</span>
          )}
        </div>
      ))}
    </div>
  </>
);
