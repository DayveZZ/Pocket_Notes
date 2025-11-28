import { useState } from "react";
import GroupList from "./components/GroupsList.jsx";
import CreateGroupModal from "./components/CreateGroupModel.jsx";
import RightPanel from "./components/RightPanel.jsx";
import "./App.css";
import "./styles/MediaQuery.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleSelectGroup = (index) => {
    setSelectedGroup(index);
    if (window.innerWidth <= 768) setIsMobileView(true);
  };

  const handleBackToGroups = () => {
    setIsMobileView(false);
    setSelectedGroup(null);
  };

  return (
    <div className="main">
      {!isMobileView && (
        <GroupList
          onCreate={() => setShowModal(true)}
          selectedGroup={selectedGroup}
          onSelectGroup={handleSelectGroup}
        />
      )}

      {(window.innerWidth > 768 || isMobileView) && (
        <RightPanel selectedGroup={selectedGroup} onBack={handleBackToGroups} />
      )}

      {showModal && <CreateGroupModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
