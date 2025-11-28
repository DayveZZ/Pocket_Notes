import { useGroups } from "../context/GroupsContext.jsx";
import "../styles/Group.css";
import "../styles/CreateButton.css";
export default function GroupList({ onCreate, selectedGroup, onSelectGroup }) {
  const { groups } = useGroups();
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
            onClick={() => onSelectGroup(i)}
          >
            <div>
              <div className={g.colour}>
                {g.name
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0].toUpperCase())
                  .join("")}
              </div>
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
