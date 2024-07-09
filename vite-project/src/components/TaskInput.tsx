// src/components/TaskInput.tsx
import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;
