import { useState, useEffect } from "react";

const Groups = () => {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <ul className="group">
        <li className="group-list">
          <div className="purple">PN</div>
          <span>Personal Notes</span>
        </li>

        <li className="group-list">
          <div className="pink">PN</div>
          <span>Personal Notes</span>
        </li>

        <li className="group-list">
          <div className="cyan">JG</div>
          <span>Javascript grp</span>
        </li>

        <li className="group-list">
          <div className="orange">CN</div>
          <span>CSS Notes</span>
        </li>

        <li className="group-list">
          <div className="blue">WK</div>
          <span>Work</span>
        </li>

        <li className="group-list">
          <div className="light-blue">SN</div>
          <span>SQL Notes</span>
        </li>

        <li className="group-list">
          <div className="purple">DP</div>
          <span>Design Projects</span>
        </li>

        <li className="group-list">
          <div className="pink">RT</div>
          <span>React Tasks</span>
        </li>

        <li className="group-list">
          <div className="cyan">AN</div>
          <span>Analytics Notes</span>
        </li>

        <li className="group-list">
          <div className="orange">UI</div>
          <span>UI Ideas</span>
        </li>

        <li className="group-list">
          <div className="blue">DB</div>
          <span>Database Notes</span>
        </li>

        <li className="group-list">
          <div className="light-blue">AP</div>
          <span>App Planning</span>
        </li>

        <li className="group-list">
          <div className="purple">ML</div>
          <span>Machine Learning</span>
        </li>

        <li className="group-list">
          <div className="pink">WD</div>
          <span>Web Dev Notes</span>
        </li>

        <li className="group-list">
          <div className="cyan">TS</div>
          <span>TypeScript Notes</span>
        </li>

        <li className="group-list">
          <div className="orange">GX</div>
          <span>Graphics Experiments</span>
        </li>
      </ul>

      <div>
        <button className="plusBtn" onClick={() => setShow(true)}>
          +
        </button>
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
    </>
  );
};

export default Groups;
