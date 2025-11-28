import { useState, useEffect, useRef } from "react";
import { useGroups } from "../context/GroupsContext.jsx";
import "../styles/CreateGroup.css";
const colours = ["purple", "pink", "cyan", "orange", "blue", "light-blue"];
export default function CreateGroupModal({ onClose }) {
  const { groups, setGroups } = useGroups();
  const [groupName, setGroupName] = useState("");
  const [selectedColour, setSelectedColour] = useState(null);
  const modalRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalColour =
      selectedColour || colours[Math.floor(Math.random() * colours.length)];
    const newGroup = { name: groupName, colour: finalColour };
    setGroups([...groups, newGroup]);
    onClose();
  };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  return (
    <div className="create">
      <form
        className="create-group"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
        ref={modalRef}
      >
        <h1>Create New Group</h1>

        <div className="group-name">
          <label>Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
            required
          />
        </div>
        <div className="colour-group">
          <label>Choose colour</label>
          <div className="colours">
            {colours.map((c) => (
              <button
                key={c}
                type="button"
                className={`colour ${c} ${
                  selectedColour === c ? "selected" : ""
                }`}
                onClick={() => setSelectedColour(c)}
              ></button>
            ))}
          </div>
        </div>
        <div className="create-btn">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}
