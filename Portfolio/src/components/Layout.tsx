import { useEffect, useRef, useState, type FC } from "react";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";
import { About, Experience, Skills, Projects, Education, Awards, Contact } from "./Sections";
import { files, profile, type FileId } from "../data";

const sectionComponents: Record<FileId, FC> = {
  about: About,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  education: Education,
  awards: Awards,
  contact: Contact,
};

const Layout = () => {
  const [active, setActive] = useState<FileId>("about");
  const clicked = useRef(false);
  const clickTimer = useRef<number | undefined>(undefined);

  const scrollTo = (id: FileId) => {
    clicked.current = true;
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.clearTimeout(clickTimer.current);
    clickTimer.current = window.setTimeout(() => {
      clicked.current = false;
    }, 700);
  };

  useEffect(() => {
    const sections = files
      .map((f) => document.getElementById(f.id))
      .filter((el): el is HTMLElement => Boolean(el));

    // Reveal animation: show a section as soon as any of it enters the viewport,
    // then stop watching it.
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    // Scroll-spy: highlight the section sitting in the upper third of the viewport.
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !clicked.current) {
            setActive(entry.target.id as FileId);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      revealObserver.observe(section);
      spyObserver.observe(section);
    });

    // The last section can never reach the spy band, so activate it once the
    // page is scrolled to the bottom.
    const onScroll = () => {
      if (clicked.current) return;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(files[files.length - 1].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      spyObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="shell">
      <Sidebar active={active} onSelect={scrollTo} />

      <div className="main">
        <main className="content">
          {files.map((file) => {
            const Section = sectionComponents[file.id];
            return (
              <section key={file.id} id={file.id} className="section">
                <Section />
              </section>
            );
          })}
        </main>

        <footer className="footer">
          built by {profile.name} — last commit today
        </footer>
      </div>

      <StatusBar active={active} />
    </div>
  );
};

export default Layout;
