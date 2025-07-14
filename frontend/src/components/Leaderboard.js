import React from "react";
import { FaTrophy } from "react-icons/fa";

function Leaderboard({ leaderboard }) {
  return (
    <div className="card p-3 shadow-sm mb-4 rounded-4">
      <h5 className="mb-3 text-center">🏆 Leaderboard Table</h5>
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col">🏅 Rank</th>
              <th scope="col">👤 Name</th>
              <th scope="col">⭐ Points</th>
              <th scope="col">🏆</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={index}>
                <td><strong>{user.rank}</strong></td>
                <td>{user.name}</td>
                <td>{user.totalPoints}</td>
                <td><FaTrophy color="#f1c40f" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
