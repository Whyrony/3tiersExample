import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backendUrl from './config'; // config.js 파일을 가져옵니다.

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const res = await axios.get(`${backendUrl}/members`); 
        setMembers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMembers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/members/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Team Members</h1>
      <div className="members">
        {members.map((member) => (
          <div key={member.id} className="member">
            <img src={member.photo_url} alt="" />
            <h2>{member.name}</h2>
            <p>Student Number: {member.student_number}</p>
            <button className="delete" onClick={() => handleDelete(member.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${member.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new member
        </Link>
      </button>
    </div>
  );
};

export default Members;
