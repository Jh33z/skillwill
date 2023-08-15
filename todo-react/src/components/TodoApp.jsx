import React, { useState } from "react";
import "../App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
    setInProgressTasks([...inProgressTasks, newTask]);
  };

  const moveToDone = (task) => {
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));
    setDoneTasks([...doneTasks, task]);
  };

  const moveToInProgress = (task) => {
    setDoneTasks(doneTasks.filter((t) => t.id !== task.id));
    setInProgressTasks([...inProgressTasks, task]);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));
    setDoneTasks(doneTasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="todo-app">
      <div className="columns">
        <InProgressColumn
          tasks={inProgressTasks}
          moveToDone={moveToDone}
          moveToInProgress={moveToInProgress}
          deleteTask={deleteTask}
        />
        <DoneColumn
          tasks={doneTasks}
          moveToInProgress={moveToInProgress}
          deleteTask={deleteTask}
        />
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
};

const InProgressColumn = ({ tasks, moveToDone, deleteTask }) => {
  return (
    <div className="column">
      <h2>In Progress</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <p>{task.text}</p>
          <button onClick={() => moveToDone(task)}>Move to Done</button>
          <button onClick={() => deleteTask(task)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const DoneColumn = ({ tasks, moveToInProgress, deleteTask }) => {
  return (
    <div className="column">
      <h2>Done</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <p>{task.text}</p>
          <button onClick={() => moveToInProgress(task)}>
            Move to In Progress
          </button>
          <button onClick={() => deleteTask(task)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default App;
