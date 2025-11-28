import { createContext, useState, useContext, useEffect } from "react";
const GroupsContext = createContext();
export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState(() => {
    const saved = localStorage.getItem("groupsData");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("groupsData", JSON.stringify(groups));
  }, [groups]);
  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};
export const useGroups = () => useContext(GroupsContext);
