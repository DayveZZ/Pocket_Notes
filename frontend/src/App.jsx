import { useState } from "react";
import GroupList from "./components/GroupsList.jsx";
import CreateGroupModal from "./components/CreateGroupModel.jsx";
import RightPanel from "./components/RightPanel.jsx";
import "./App.css";
import "./styles/CreateButton.css";
import "./styles/CreateGroup.css";
import "./styles/Group.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div className="main">
      {/* <GroupList onCreate={() => setShowModal(true)} /> */}
      <GroupList
        onCreate={() => setShowModal(true)}
        selectedGroup={selectedGroup}
        onSelectGroup={setSelectedGroup}
      />
      <RightPanel selectedGroup={selectedGroup} />
      {showModal && <CreateGroupModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
