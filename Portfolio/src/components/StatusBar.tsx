import { useEffect, useState } from "react";
import { files, type FileId } from "../data";

type Props = {
  active: FileId;
};

const langFor = (label: string): string => {
  if (label.endsWith("/")) return "Folder";
  if (label.endsWith(".tsx")) return "TypeScript React";
  if (label.endsWith(".ts")) return "TypeScript";
  if (label.endsWith(".json")) return "JSON";
  if (label.endsWith(".md")) return "Markdown";
  return "Plain Text";
};

const StatusBar = ({ active }: Props) => {
  const label = files.find((f) => f.id === active)?.label ?? "";
  const [line, setLine] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      setLine(1 + Math.round(ratio * 420));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="statusbar" role="status" aria-live="off">
      <div className="statusbar__group">
        <span className="statusbar__item">
          <span className="statusbar__branch" aria-hidden="true">
            {"⎇"}
          </span>
          main
        </span>
        <span className="statusbar__item statusbar__file" key={label}>
          <span className="statusbar__dot" aria-hidden="true" />
          {label}
        </span>
      </div>

      <div className="statusbar__group">
        <span className="statusbar__item">{langFor(label)}</span>
        <span className="statusbar__item">UTF-8</span>
        <span className="statusbar__item">
          Ln {line}, Col 1
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
