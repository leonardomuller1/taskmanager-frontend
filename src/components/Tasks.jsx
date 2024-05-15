import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {tasks
            .filter((tasks) => tasks.isCompleted === false)
            .map((lastTask) => (
              <TaskItem task={lastTask} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((tasks) => tasks.isCompleted === true)
            .map((lastTask) => (
              <TaskItem task={lastTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
