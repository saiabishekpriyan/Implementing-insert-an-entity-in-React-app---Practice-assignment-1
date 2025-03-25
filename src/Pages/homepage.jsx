// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Library</h1>
      <button
        onClick={() => navigate("/add-book")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Book
      </button>
      {/* Render the BookCard components here */}
    </div>
  );
};

export default Home;