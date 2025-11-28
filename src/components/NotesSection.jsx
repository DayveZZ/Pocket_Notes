import { useState, useEffect } from "react";
import arrow from "../assets/Textarea-Arrow.svg";
import "../styles/NotesSection.css";
import "../styles/Group.css";
export default function NotesSection({ group, onBack }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const storageKey = `notes-${group.name.trim()}`;
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setNotes(JSON.parse(saved));
    else setNotes([]);
  }, [storageKey]);
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(notes));
  }, [notes, storageKey]);
  const handleAddNote = () => {
    if (!text.trim()) return;
    const now = new Date();
    const noteData = {
      id: Date.now(),
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
    const newNotes = [...notes, noteData];
    setNotes(newNotes);
    setText("");
    setTimeout(() => {
      setNotes((prev) => {
        const updated = [...prev];
        if (updated.length) updated[updated.length - 1].animate = false;
        return updated;
      });
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
        {notes.map((note) => (
          <div
            key={note.id}
            className={`note-item ${note.animate ? "fade-in" : ""}`}
          >
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
