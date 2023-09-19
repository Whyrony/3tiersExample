import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backendUrl from './config'; // config.js 파일을 가져옵니다.

const Add = () => {
  const [member, setMember] = useState({
    name: "",
    student_number: "",
    photo_url: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/members`, member);
      navigate("/members"); 
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Add New Member</h1>
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
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all members</Link>
    </div>
  );
};

export default Add;
