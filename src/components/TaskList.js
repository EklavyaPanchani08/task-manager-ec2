import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </div>
  );
};

export default TaskList;