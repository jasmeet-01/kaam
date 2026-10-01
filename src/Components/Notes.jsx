import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Notes = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error('Error loading tasks:', error);
      return [];
    }
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const submitBtn = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Please enter a title for your note.');
      return;
    }

    // Show confirmation popup
    setShowConfirm(true);
  };

  const saveNote = () => {
    setTasks([...tasks, { title, content }]);

    setTitle('');
    setContent('');
    setShowConfirm(false);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mt-5 overflow-hidden">
      <h2 className="text-xl font-bold">
        Notes
      </h2>

      <form
        onSubmit={submitBtn}
        className="flex flex-col gap-4 mt-4"
      >
        <input
          type="text"
          placeholder="Title"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your notes here..."
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Save Note
        </button>
      </form>

      {/* Notes */}
      <div className="mt-4 flex gap-4 overflow-x-auto">
        {tasks.map((task, index) => (
          <div
            key={index}
            className=" relative bg-white p-4 rounded-md shadow-md mb-2 w-50 h-40 shrink-0 overflow-hidden"
          >
            <div className='absolute top-2 right-2 cursor-pointer'
            onClick={() => deleteTask(index)}>
              <X size={20} strokeWidth={1.5} /></div>
            <h3 className="font-bold text-2xl">
              {task.title}
            </h3>

            <p className="text-gray-700">
              {task.content}
            </p>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-80">
            <h3 className="text-xl font-bold mb-2">
              Save Note?
            </h3>

            <p className="text-gray-600 mb-6">
              Do you want to 
              <span className="font-semibold"> save </span> 
               the note "{title}"?
            </p>

            <div className="flex justify-end gap-3">
              {/* Cancel */}
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>

              {/* Overwrite */}
              <button
                onClick={saveNote}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;

