import { useParams } from "react-router-dom";
import { loadDataUser } from "../../hooks/LoadDataUser";
import React from "react";

export default function Dashboard() {
  const { uid } = useParams();

  React.useEffect(() => {
    const loadData = async () => {
      if (uid) {
        const data = await loadDataUser(uid);
      }
    };
    loadData();
  }, [uid]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
