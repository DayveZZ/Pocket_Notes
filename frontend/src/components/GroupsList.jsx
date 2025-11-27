import { useState } from "react";
import { useGroups } from "../context/GroupsContext.jsx";

export default function GroupList({ onCreate }) {
  const { groups } = useGroups();
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelectGroup = (index) => {
    setSelectedGroup(index);
  };

  return (
    <div className="leftBox">
      <h2>Pocket Notes</h2>

      <ul className="group">
        {groups.map((g, i) => (
          <li
            key={i}
            className={`group-list ${
              selectedGroup === i ? "active-group" : ""
            }`}
            onClick={() => handleSelectGroup(i)}
          >
            <div className={g.colour}>
              {g.name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0].toUpperCase())
                .join("")}
            </div>
            <span>{g.name}</span>
          </li>
        ))}
      </ul>

      <div className="plusBtn">
        <button onClick={onCreate}>+</button>
      </div>
    </div>
  );
}
