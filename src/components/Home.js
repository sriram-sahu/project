import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import CreateTodo from "./CreateTodo";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <CreateTodo />
      </div>
    </div>
  );
};

export default Home;
