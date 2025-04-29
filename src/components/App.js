import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [currentCategory, setCurrentCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]); // Basic unique ID
  };

  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  const tasksToDisplay = currentCategory === "All"  
    ? tasks
    : tasks.filter((task) => task.category === currentCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={handleCategorySelect}
        currentCategory={currentCategory}
      />
      <NewTaskForm onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;