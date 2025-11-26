import { useState, useEffect } from "react";
import "./App.css";
import bgPreview from "./assets/image-removebg-preview 1.svg";

function App() {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false); // or setShow(prev => !prev) if you prefer toggle
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="leftBox">
          <h2>Pocket Notes</h2>

          <ul className="group">
            <li class="group-list">
              <div class="purple">PN</div>
              <span>Personal Notes</span>
            </li>

            <li class="group-list">
              <div class="pink">PN</div>
              <span>Personal Notes</span>
            </li>

            <li class="group-list">
              <div class="cyan">JG</div>
              <span>Javascript grp</span>
            </li>

            <li class="group-list">
              <div class="orange">CN</div>
              <span>CSS Notes</span>
            </li>

            <li class="group-list">
              <div class="blue">WK</div>
              <span>Work</span>
            </li>

            <li class="group-list">
              <div class="light-blue">SN</div>
              <span>SQL Notes</span>
            </li>

            <li class="group-list">
              <div class="purple">DP</div>
              <span>Design Projects</span>
            </li>

            <li class="group-list">
              <div class="pink">RT</div>
              <span>React Tasks</span>
            </li>

            <li class="group-list">
              <div class="cyan">AN</div>
              <span>Analytics Notes</span>
            </li>

            <li class="group-list">
              <div class="orange">UI</div>
              <span>UI Ideas</span>
            </li>

            <li class="group-list">
              <div class="blue">DB</div>
              <span>Database Notes</span>
            </li>

            <li class="group-list">
              <div class="light-blue">AP</div>
              <span>App Planning</span>
            </li>

            <li class="group-list">
              <div class="purple">ML</div>
              <span>Machine Learning</span>
            </li>

            <li class="group-list">
              <div class="pink">WD</div>
              <span>Web Dev Notes</span>
            </li>

            <li class="group-list">
              <div class="cyan">TS</div>
              <span>TypeScript Notes</span>
            </li>

            <li class="group-list">
              <div class="orange">GX</div>
              <span>Graphics Experiments</span>
            </li>
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
            <form onSubmit={handleSubmit} className="create-group">
              <h1>Create New Group</h1>
              <div className="group-name">
                <label>Group Name</label>
                <input type="text" placeholder="Enter group name" />
              </div>
              <div className="colour-group">
                <label>Choose colour</label>
                <div className="colours">
                  <button className="colour purple"></button>
                  <button className="colour pink"></button>
                  <button className="colour cyan"></button>
                  <button className="colour orange"></button>
                  <button className="colour blue"></button>
                  <button className="colour light-blue"></button>
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
