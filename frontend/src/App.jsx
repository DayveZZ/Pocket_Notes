import "./App.css";
import bgPreview from "./assets/image-removebg-preview 1.svg";

function App() {
  return (
    <div className="main">
      <div className="leftBox">
        <h2>Pocket Notes</h2>

        <ul className="group">
          <li className="group-list">
            <div>PN</div>
            <span>Personal Notes</span>
          </li>
          <li className="group-list">
            <div>WK</div>
            <span>Work</span>
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

        {/* <div>
            <h2>Personal Notes</h2>
            <button>+ Note</button>
          </div>
          <div>
            <div>
              <p>This is a sample note.</p>
              <time>Nov 25, 2025 - 10:45 AM</time>
            </div>
          </div>
        </div> */}

        <div className="footerText">
          <span>🔒</span> end-to-end encrypted
        </div>
      </div>
    </div>
  );
}

export default App;
