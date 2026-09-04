import { files, links, type FileId } from "../data";

type Props = {
  active: FileId;
  onSelect: (id: FileId) => void;
};

const Sidebar = ({ active, onSelect }: Props) => {
  return (
    <nav className="sidebar" aria-label="Explorer">
      <div className="sidebar__label">Explorer</div>

      {files.map((file) => (
        <button
          key={file.id}
          type="button"
          className={`sidebar__file${active === file.id ? " is-active" : ""}`}
          aria-current={active === file.id ? "true" : undefined}
          onClick={() => onSelect(file.id)}
        >
          {file.label}
        </button>
      ))}

      <div className="sidebar__divider" />

      <a className="sidebar__link" href={links.github.href} target="_blank" rel="noreferrer">
        {links.github.label}
      </a>
      <a className="sidebar__link" href={links.linkedin.href} target="_blank" rel="noreferrer">
        {links.linkedin.label}
      </a>
      <a className="sidebar__link" href={links.website.href} target="_blank" rel="noreferrer">
        {links.website.label}
      </a>
      <a className="sidebar__link" href={links.resume.href} download>
        ↓ {links.resume.label}
      </a>
    </nav>
  );
};

export default Sidebar;
