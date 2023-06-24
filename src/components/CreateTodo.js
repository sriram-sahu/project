import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const CreateTodo = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const companyId = Cookies.get("companyId");
      const accessToken = Cookies.get("token");

      try {
        const response = await fetch(
          `https://stage.api.sloovi.com/team?product=outreach&company_id=${companyId}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const users = data.results.data;
          setUserDetails(users);
        } else {
          console.log("Failed to fetch user details");
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className="create-todo-container">
      <div className="form-group">
        <label htmlFor="task">Task Description</label>
        <input
          type="text"
          id="task"
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
        />
      </div>
      <div className="form-group">
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="user">Select User</label>
        <select id="user" value={selectedUser} onChange={handleUserChange}>
          <option value="">Select User</option>
          {userDetails.map((each) => (
            <option key={each.id} value={each.first}>
              {each.first}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CreateTodo;
