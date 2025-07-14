import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaClock } from "react-icons/fa";

function ClaimHistory({ userId }) {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    if (!userId) {
        alert("Please select a user first.");
        return;
    }
    try {
      const res = await axios.get(`http://localhost:5000/api/history/${userId}`);
      setHistory(res.data);
    } catch (err) {
      console.error("Error fetching claim history in ClaimHistory in frontend:", err.message);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [userId]);

  if (!userId) return null;

  return (
        <div className="card p-3 shadow-sm mt-4 rounded-4">
      <h5 className="mb-3 text-center">🕓 Claim History</h5>

      {history.length === 0 ? (
        <p className="text-muted text-center">No claim history yet.</p>
      ) : (
        <ul className="list-group">
          {history.map((entry, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>+{entry.pointsClaimed} pts</span>
              <small className="text-muted d-flex align-items-center">
                <FaClock className="me-1" /> {new Date(entry.claimedAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClaimHistory;
