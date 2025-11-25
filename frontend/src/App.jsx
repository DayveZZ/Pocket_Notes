import "./App.css";
import bgPreview from "./assets/image-removebg-preview 1.svg";

function App() {
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
            <button className="plusBtn">+</button>
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

        <div className="create-group">
          <h1>Create New Group</h1>
          <span>
            <label>Group Name</label>
            <input type="text" />
          </span>
          <span>
            <label>Choose colour</label>
            <div>
              <p className="colour purple"></p>
              <p className="colour pink"></p>
              <p className="colour cyan"></p>
              <p className="colour orange"></p>
              <p className="colour blue"></p>
              <p className="colour light-blue"></p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
