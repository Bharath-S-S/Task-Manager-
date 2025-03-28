import { useState } from "react";
import { Link } from 'react-router-dom';
import updateOne from '../../handle/handleUpdate';



// eslint-disable-next-line react/prop-types
const TaskItem = ({ id ,title, description, status }) => {
  const [completed, setCompleted] = useState(status);

  const handleToggleStatus = () => {
    setCompleted(!completed);
    updateOne('tasklist', id, {
      status: !completed
    })
  };

  return (
    <div
      className={`border-2 rounded m-8 p-4 border-neutral-200 ${
        completed ? "text-gray-400" : ""
      }`}
    >
      <h3
        className={`text-xl font-bold${
          completed
            ? "text-gray-400 line-through transition-all duration-300"
            : ""
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 ${
          completed
            ? "text-gray-400 line-through transition-all duration-300"
            : ""
        }`}
      >
        {description}
      </p>
      <div className='flex justify-end mt-2'>
        <button
          className={`px-4 py-2 mr-2 ${
            completed ? "bg-gray-400" : "bg-purple-500"
          } text-white rounded`}
          onClick={handleToggleStatus}
        >
          {completed ? "Undo" : "Complete"}
        </button>
        <Link
          to={`/task/${id}`}
          className='px-4 py-2 bg-purple-500 text-white rounded'
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
