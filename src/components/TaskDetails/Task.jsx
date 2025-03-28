import { Link, useNavigate } from "react-router-dom";

const Task = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, status } = props.data;
  // eslint-disable-next-line react/prop-types
  const id = props.id;
  const navigate = useNavigate();

  const editTaskhandler = (e) => {
    e.preventDefault();
    navigate(`/task/${id}/edit`, {
      state: {
        taskTitle: title,
        taskDescription: description,
      },
    });
  };

  return (
    <>
      <div className='max-w-lg mx-auto mt-10 p-6 bg-purple-100 rounded-lg shadow'>
        <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
        <p className='text-gray-600 mb-2'>{description}</p>
        <p
          className={`text-sm mb-2 ${
            status ? "text-purple-500" : "text-red-500"
          }`}
        >
          {status ? "Completed" : "To be completed"}
        </p>
        <div className='flex justify-between items-center mt-4'>
          <Link
            to='/'
            className='bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded focus:outline-none'
          >
            Back
          </Link>
          <button
            onClick={editTaskhandler}
            className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded focus:outline-none'
          >
            Edit
          </button>
          <Link
            to='/'
            // eslint-disable-next-line react/prop-types
            onClick={() => props.deleteTask()}
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none'
          >
            Delete
          </Link>
        </div>
      </div>
    </>
  );
};

export default Task;
/*
     <TaskItem
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
      />

*/
