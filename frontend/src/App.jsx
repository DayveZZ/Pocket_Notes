import { useState, useEffect } from "react";
import "./App.css";
import bgPreview from "./assets/image-removebg-preview 1.svg";

function App() {
  const [show, setShow] = useState(false);
  const [selectedColour, setSelectedColour] = useState(null);

  const colour = ["purple", "pink", "cyan", "orange", "blue", "light-blue"];
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalColour =
      selectedColour || colour[Math.floor(Math.random() * colour.length)];

    setGroups([...groups, { name: groupName, colour: finalColour }]);

    setGroupName("");
    setSelectedColour(null);
    setShow(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="main">
        <div className="leftBox">
          <h2>Pocket Notes</h2>

          <ul className="group">
            {groups.map((g, i) => (
              <li key={i} className="group-list">
                <div className={g.colour}>
                  {" "}
                  {g.name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0].toUpperCase())
                    .join("")}
                </div>
                <span>{g.name}</span>
              </li>
            ))}
          </ul>

          <div>
            <button className="plusBtn" onClick={() => setShow(true)}>
              +
            </button>
          </div>
        </div>

        <div className="rightBox">
          <img src={bgPreview} alt="illustration" />
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online. <br />{" "}
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>

          <div className="footerText">
            <span>🔒</span> end-to-end encrypted
          </div>
        </div>

        {show && (
          <div className="create">
            <form
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit(e);
              }}
              className="create-group"
            >
              <h1>Create New Group</h1>

              <div className="group-name">
                <label>Group Name</label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Enter group name"
                />
              </div>

              <div className="colour-group">
                <label>Choose colour</label>
                <div className="colours">
                  <button
                    className={`colour purple ${
                      selectedColour === "purple" ? "selected" : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedColour("purple")}
                  ></button>

                  <button
                    className={`colour pink ${
                      selectedColour === "pink" ? "selected" : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedColour("pink")}
                  ></button>

                  <button
                    className={`colour cyan ${
                      selectedColour === "cyan" ? "selected" : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedColour("cyan")}
                  ></button>

                  <button
                    className={`colour orange ${
                      selectedColour === "orange" ? "selected" : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedColour("orange")}
                  ></button>

                  <button
                    className={`colour blue ${
                      selectedColour === "blue" ? "selected" : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedColour("blue")}
                  ></button>

                  <button
                    className={`colour light-blue ${
                      selectedColour === "light-blue" ? "selected" : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedColour("light-blue")}
                  ></button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
