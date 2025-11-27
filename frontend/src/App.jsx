import { useState } from "react";
import { GroupsProvider } from "./context/GroupsContext.jsx";
import GroupList from "./components/GroupsList.jsx";
import CreateGroupModal from "./components/CreateGroupModel.jsx";
import RightPanel from "./components/RightPanel.jsx";
import "./App.css";
import "./styles/CreateButton.css";
import "./styles/CreateGroup.css";
import "./styles/Group.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <GroupsProvider>
      <div className="main">
        <GroupList onCreate={() => setShowModal(true)} />
        <RightPanel />
        {showModal && <CreateGroupModal onClose={() => setShowModal(false)} />}
      </div>
    </GroupsProvider>
  );
}
