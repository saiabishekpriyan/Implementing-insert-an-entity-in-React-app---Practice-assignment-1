// src/pages/AddBook.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    // Logic to add the book can go here.
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Cover Image URL</label>
          <input
            type="url"
            name="coverImageUrl"
            value={form.coverImageUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;