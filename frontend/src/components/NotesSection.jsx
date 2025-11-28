import { useState } from "react";
import arrow from "../assets/Textarea-Arrow.svg";
import "../styles/NotesSection.css";

export default function NotesSection({ group }) {
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
    };

    const newNotes = { ...notes, [group.name]: [...groupNotes, noteData] };
    setNotes(newNotes);
    setText("");
  };

  return (
    <div className="notes-view">
      <div className="notes-header">
        <h2>{group.name}</h2>
      </div>

      <div className="notes-list">
        {groupNotes.length === 0 ? (
          <p className="no-notes">No notes yet...</p>
        ) : (
          groupNotes.map((note, i) => (
            <div key={i} className="note-item">
              <p>{note.text}</p>
              <div className="note-meta">
                <div className="date">{note.date}</div>
                <p className="dot"></p>
                <div className="time">{note.time}</div>
              </div>
            </div>
          ))
        )}
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
