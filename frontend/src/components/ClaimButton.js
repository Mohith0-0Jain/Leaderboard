import React from "react";
import axios from "axios";

function ClaimButton({ userId, onPointsClaimed }) {
  const handleClaim = async () => {
    if (!userId) {
      alert("Please select a user first.");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/claim/${userId}`);
      const points = res.data.points;
      alert(`${points} points awarded to ${res.data.user.name}!`);
      if(onPointsClaimed){
            onPointsClaimed();
        } // trigger leaderboard reload
    } catch (error) {
      console.error("Error claiming points:in frontend ClaimButton", error.message);
      alert("Something went wrong while claiming points.");
    }
  };

  return (
    <div className="d-grid mb-4">
      <button className="btn btn-success btn-lg rounded-3" onClick={handleClaim}>
        🎯 Claim Random Points
      </button>
    </div>
  );
}

export default ClaimButton;
