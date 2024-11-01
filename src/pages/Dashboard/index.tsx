import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { uid } = useParams();



  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
