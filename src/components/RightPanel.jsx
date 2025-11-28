import { useGroups } from "../context/GroupsContext.jsx";
import bgPreview from "../assets/image-removebg-preview 1.svg";
import NotesSection from "./NotesSection.jsx";
import "../styles/NotesSection.css";

export default function RightPanel({ selectedGroup, onBack }) {
  const { groups } = useGroups();

  if (selectedGroup === null || !groups[selectedGroup]) {
    return (
      <div className="rightBox">
        <img src={bgPreview} alt="illustration" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>
        <div className="footerText">
          <span>🔒</span> end-to-end encrypted
        </div>
      </div>
    );
  }

  const group = groups[selectedGroup];
  return <NotesSection group={group} onBack={onBack} />;
}
