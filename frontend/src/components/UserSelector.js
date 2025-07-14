import React, { useEffect, useState } from "react";
import axios from "axios";

function UserSelector({ onUserSelect, onUserAdded }) {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users in fetchUsers frontend:", error.message);
    }
  };

  // Call fetch on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user to database
  const handleAddUser = async () => {
    if (!newUserName.trim()) {
        alert("Please enter a valid user name to Add.");
        return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/newusers", {
        name: newUserName.trim(),
      });
      setNewUserName("");
      fetchUsers();
      if (onUserAdded) {
            onUserAdded();
        }
    } catch (error) {
      console.error("Error adding user in handleAddUser frontend:", error.message);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedUserId(e.target.value);
    onUserSelect(e.target.value);
  };

  return (
    <div className="card p-3 mb-4 shadow-sm rounded-4">
      <h5 className="mb-3">👤 Select or Add User</h5>

      <select
        className="form-select mb-3"
        value={selectedUserId}
        onChange={handleSelectChange}
      >
        <option value="">-- Select a user --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter new user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddUser}>
          ➕ Add User
        </button>
      </div>
    </div>
  );
}

export default UserSelector;
