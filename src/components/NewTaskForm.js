// components/NewTaskForm.js
import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(CATEGORIES[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;