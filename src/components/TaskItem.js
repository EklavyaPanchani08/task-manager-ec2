import React from 'react';

const TaskItem = ({ task, deleteTask, completeTask }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={completeTask}>{task.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
