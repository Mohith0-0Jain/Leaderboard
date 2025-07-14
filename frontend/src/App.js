import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import TopThreeCard from "./components/TopThreeCard";
import ClaimHistory from "./components/ClaimHistory";

function App() {
  const [selectedUser, setSelectedUser] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

   const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };
  const handleClaimComplete = () => {
    setRefreshTrigger((prev) => prev + 1); // triggers leaderboard re-render
  };
  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leaderboard");
      setLeaderboard(res.data);
    } catch (err) {
      console.error("Error fetching leaderboard:", err.message);
    }
  };
  useEffect(() => {
    fetchLeaderboard();
  }, [refreshTrigger]);

  return (
    <div className="container mt-4" >
      <h2 className="mb-4" style={{ textAlign: "center", marginBottom: "1rem" }}>🏆 Leaderboard</h2>
      <UserSelector onUserSelect={handleUserSelect} onUserAdded={handleClaimComplete}/>
      <ClaimButton userId={selectedUser} onPointsClaimed={handleClaimComplete} />
      <TopThreeCard leaderboard={leaderboard} />
      <Leaderboard leaderboard={leaderboard} />
      <ClaimHistory userId={selectedUser} />
    </div>
  );
}

export default App;
