import React, { useEffect, useState } from "react";
import axios from "axios";

const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/getUserDetails"
      );
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 mt-10">Error: {error}</div>;

  return (
    <div style={{ background: "#f2f2f2", minHeight: "100vh", padding: "2rem" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>User</h2>
          <button
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            + Add User
          </button>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 10px",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left", color: "#999" }}>
              <th>ID</th>
              <th>User Name</th>
              <th>Designation</th>
              <th>Team</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <td style={{ padding: "1rem" }}>{`${user.userId}`}</td>
                <td style={{ color: "#3b82f6", cursor: "pointer" }}>
                  {user.firstName}
                </td>
                <td>{user.designationId === 1 ? "Manager" : "Employee"}</td>
                <td>{user.teamId === 10 ? "Java" : "Other"}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" checked={user.status} readOnly />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
            alignItems: "center",
            fontSize: "14px",
            color: "#666",
          }}
        >
          <span style={{ cursor: "pointer" }}>‹ Previous</span>
          <span>
            {Array.from({ length: 10 }, (_, i) => (
              <span
                key={i}
                style={{
                  margin: "0 4px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  backgroundColor: i === 3 ? "#3b82f6" : "transparent",
                  color: i === 3 ? "#fff" : "#000",
                  fontWeight: i === 3 ? "bold" : "normal",
                  cursor: "pointer",
                }}
              >
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
            ))}
          </span>
          <span style={{ cursor: "pointer" }}>Next ›</span>
        </div>
      </div>

      {/* Toggle Switch Style */}
      <style>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 34px;
          height: 20px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #3b82f6;
        }
        input:checked + .slider:before {
          transform: translateX(14px);
        }
      `}</style>
    </div>
  );
};

export default UserComponent;
