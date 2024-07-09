// src/components/TaskList.tsx
import React, { useState } from 'react';

interface TaskListProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTask, setEditTask] = useState<string>('');

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index: number) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const handleSaveTask = (index: number) => {
    const newTasks = tasks.map((task, i) => (i === index ? editTask : task));
    setTasks(newTasks);
    setEditIndex(null);
    setEditTask('');
  };

  const handleToggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) => (i === index ? `~~${task}~~` : task));
    setTasks(newTasks);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <input 
            type="checkbox" 
            onChange={() => handleToggleTask(index)} 
          />
          {editIndex === index ? (
            <input 
              type="text" 
              value={editTask} 
              onChange={(e) => setEditTask(e.target.value)} 
            />
          ) : (
            <span style={{ textDecoration: task.includes('~~') ? 'line-through' : 'none' }}>
              {task.replace(/~~/g, '')}
            </span>
          )}
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
          {editIndex === index ? (
            <button onClick={() => handleSaveTask(index)}>Save</button>
          ) : (
            <button onClick={() => handleEditTask(index)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
