import React, { useEffect, useState } from "react";
import axios from "axios";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/members");
        setMembers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMembers();
  }, []);

  return (
    <div>
      <h1>Team Members</h1>
      <div className="members">
        {members.map((member) => (
          <div key={member.id} className="member">
            <img src={member.photo_url} alt="" />
            <h2>{member.name}</h2>
            <p>Student Number: {member.student_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
