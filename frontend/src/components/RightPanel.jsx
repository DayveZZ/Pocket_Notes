// import { useGroups } from "../context/GroupsContext.jsx";
// import { useState } from "react";
// import bgPreview from "../assets/image-removebg-preview 1.svg";
// import arrow from "../assets/Textarea-Arrow.svg";
// import "../styles/NotesSection.css";

// export default function RightPanel({ selectedGroup }) {
//   const { groups } = useGroups();
//   const [notes, setNotes] = useState({});
//   const [text, setText] = useState("");

//   if (selectedGroup === null || !groups[selectedGroup]) {
//     return (
//       <div className="rightBox">
//         <img src={bgPreview} alt="illustration" />
//         <h1>Pocket Notes</h1>
//         <p>
//           Send and receive messages without keeping your phone online. <br />
//           Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
//         </p>
//         <div className="footerText">
//           <span>🔒</span> end-to-end encrypted
//         </div>
//       </div>
//     );
//   }

//   const group = groups[selectedGroup];
//   const groupNotes = notes[group.name] || [];

//   const handleAddNote = () => {
//     if (!text.trim()) return;

//     const now = new Date();
//     const noteData = {
//       text,
//       time: now.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true,
//       }),
//       date: now.toLocaleDateString([], {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }),
//     };

//     const newNotes = { ...notes, [group.name]: [...groupNotes, noteData] };
//     setNotes(newNotes);
//     setText("");
//   };

//   return (
//     <div className="notes-view">
//       <div className="notes-header">
//         <h2>{group.name}</h2>
//       </div>
//       <div className="notes-list">
//         {groupNotes.map((note, i) => (
//           <div key={i} className="note-item">
//             <p>{note.text}</p>
//             <div className="note-meta">
//               <div className="date">{note.date}</div>
//               <p className="dot"></p> <div className="time">{note.time}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="textarea">
//         <textarea
//           placeholder="Enter your text here........"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" && !e.shiftKey) {
//               e.preventDefault();
//               handleAddNote();
//             }
//           }}
//         />
//         <button onClick={handleAddNote}>
//           <img src={arrow} alt="send" />
//         </button>
//       </div>
//     </div>
//   );
// }

import { useGroups } from "../context/GroupsContext.jsx";
import bgPreview from "../assets/image-removebg-preview 1.svg";
import NotesSection from "./NotesSection.jsx";
import "../styles/NotesSection.css";

export default function RightPanel({ selectedGroup }) {
  const { groups } = useGroups();

  // Show intro if nothing selected
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

  // Show notes if group is selected
  const group = groups[selectedGroup];
  return <NotesSection group={group} />;
}
