import React from "react";
import { FaCrown, FaMedal } from "react-icons/fa";

function TopThreeCard({ leaderboard }) {
  const topThree = leaderboard.slice(0, 3);

  const ranks = [
    { bg: "bg-warning", icon: <FaCrown size={28} />, label: "1st" },   // Gold
    { bg: "bg-secondary", icon: <FaMedal size={24} />, label: "2nd" }, // Silver
    { bg: "bg-danger", icon: <FaMedal size={24} />, label: "3rd" },    // Bronze
  ];

  return (
    <div className="row text-center mb-4">
      {topThree.map((user, index) => (
        <div className="col-12 col-md-4 mb-3" key={index}>
          <div className={`card text-white ${ranks[index].bg} shadow-lg rounded-4`}>
            <div className="card-body">
              <div className="mb-2">{ranks[index].icon}</div>
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text mb-1">Rank #{user.rank}</p>
              <h6 className="fw-bold">{user.totalPoints} pts</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopThreeCard;
