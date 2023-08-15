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

const InProgressColumn = React.memo(({ tasks, moveToDone, deleteTask }) => {
  return (
    <div className="column">
      <h2>In Progress</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          moveFunction={moveToDone} 
          deleteFunction={deleteTask}
        />
      ))}
    </div>
  );
});

const DoneColumn = React.memo(({ tasks, moveToInProgress, deleteTask }) => {
  return (
    <div className="column">
      <h2>Done</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          moveFunction={moveToInProgress}
          deleteFunction={deleteTask}
        />
      ))}
    </div>
  );
});

const TaskItem = React.memo(({ task, moveFunction, deleteFunction }) => {
  return (
    <div className="task">
      <p>{task.text}</p>
      <button onClick={() => moveFunction(task)}>
        {moveFunction === moveFunction ? "Move to Done" : "Move to In Progress"}
      </button>

      <button onClick={() => deleteFunction(task)}>Delete</button>
    </div>
  );
});

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
