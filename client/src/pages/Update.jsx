import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [member, setMember] = useState({
    name: "",
    student_number: "",
    photo_url: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const memberId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${backendUrl}/members/${memberId}`, member);
      navigate("/members"); // 이 부분은 Members 목록 페이지로 이동하도록 수정했습니다.
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update Member Info</h1>
      <input
        type="text"
        placeholder="Member name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Student number"
        name="student_number"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Photo URL"
        name="photo_url"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/members">See all members</Link> {/* 이 부분은 Members 목록 페이지로 이동하도록 수정했습니다. */}
    </div>
  );
};

export default Update;
