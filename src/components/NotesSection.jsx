import { useState } from "react";
import arrow from "../assets/Textarea-Arrow.svg";
import "../styles/NotesSection.css";
import "../styles/Group.css";
export default function NotesSection({ group, onBack }) {
  const [notes, setNotes] = useState({});
  const [text, setText] = useState("");

  const groupNotes = notes[group.name] || [];

  const handleAddNote = () => {
    if (!text.trim()) return;

    const now = new Date();
    const noteData = {
      text,
      time: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      date: now.toLocaleDateString([], {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      animate: true,
    };

    const newNotes = { ...notes, [group.name]: [...groupNotes, noteData] };
    setNotes(newNotes);
    setText("");

    setTimeout(() => {
      noteData.animate = false;
      setNotes({ ...newNotes });
    }, 500);
  };

  return (
    <div className="notes-view">
      <div className="notes-header">
        {onBack && (
          <button className="back-btn" onClick={onBack}>
            ←
          </button>
        )}
        <div className={group.colour}>
          {group.name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0].toUpperCase())
            .join("")}
        </div>
        <h2>{group.name}</h2>
      </div>

      <div className="notes-list">
        {groupNotes.map((note, i) => (
          <div key={i} className={`note-item ${note.animate ? "fade-in" : ""}`}>
            <p>{note.text}</p>
            <div className="note-meta">
              <div className="date">{note.date}</div>
              <p className="dot"></p>
              <div className="time">{note.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="textarea">
        <textarea
          placeholder="Enter your text here........"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleAddNote();
            }
          }}
        />
        <button onClick={handleAddNote}>
          <img src={arrow} alt="send" />
        </button>
      </div>
    </div>
  );
}
