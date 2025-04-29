// components/CategoryFilter.js
import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ onCategorySelect, currentCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        className={currentCategory === "All" ? "selected" : ""}
        onClick={() => onCategorySelect("All")}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={currentCategory === category ? "selected" : ""}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;