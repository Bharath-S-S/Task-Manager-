import { useState } from "react";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import  updateOne  from '../../handle/handleUpdate';

const EditTask = () => {
  const navigate = useNavigate();
  
  const { id } = useParams();

  const location = useLocation();
  const { taskTitle, taskDescription  } = location.state;
  

  // eslint-disable-next-line react/prop-types
  const [title, setTitle] = useState(taskTitle);

  // eslint-disable-next-line react/prop-types
  const [description, setDescription] = useState(taskDescription);
  
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [descriptionIsValid, setDescriptionIsValid] = useState(true);

  const validateInputs = () => {
    let res = true;
    if (title === "") {
      setTitleIsValid(false);
      res = false;
    }
    if (description === "") {
      setDescriptionIsValid(false);
      res = false;
    }
    return res;
  };

  const titleChangeHandler = (value) => {
    setTitle(value);
  };

  const descriptionChangeHandler = (value) => {
    setDescription(value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      
      const data = {
        title, 
        description
      }

      setTitle("");
      setDescription("");
      setTitleIsValid(true);
      setDescriptionIsValid(true);

      updateOne('tasklist', id, data)
      navigate(`/task/${id}`)

    } else {
      return;
    }
  };

  return (
    <div className='bg-purple-200 min-h-screen flex items-center justify-center'>
      <div className='bg-white shadow-md rounded-md p-6 w-96'>
        <h2 className='text-2xl font-bold text-purple-700 mb-4'>Edit Task</h2>
        <form onSubmit={formSubmitHandler}>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
              placeholder='Enter title'
              value={title}
              onChange={(e) => titleChangeHandler(e.target.value)}
            />
            {!titleIsValid && (
              <p className='text-base text-red-600'>Title cannot be empty</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Description
            </label>
            <textarea
              id='description'
              className='w-full px-3 py-2 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:border-purple-500'
              placeholder='Enter description'
              value={description}
              onChange={(e) => descriptionChangeHandler(e.target.value)}
            ></textarea>
            {!descriptionIsValid && (
              <p className='text-base text-red-600'>
                Description cannot be empty
              </p>
            )}
          </div>
          <div className='flex'>
            <button
              className='bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors duration-300'
              type='submit'
            >
              Update Task
            </button>

            <Link
              to='/'
              className='ml-auto bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors duration-300'
              type='submit'
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
