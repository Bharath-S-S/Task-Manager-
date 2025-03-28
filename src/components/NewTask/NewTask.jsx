import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import handleSubmit from '../../handle/handleSubmit';

const NewTask = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleIsValid, setTitleIsValid] = useState(true);
    const [descriptionIsValid, setDescriptionIsValid] = useState(true);


    const validateInputs = () =>{
        let res = true;
        if(title === ""){
            setTitleIsValid(false);
            res = false;
        }
        if(description === ""){
            setDescriptionIsValid(false);
            res = false;
        }
        return res;
    }
    

    const titleChangeHandler = value => {
        setTitle(value);
    }

    const descriptionChangeHandler = value =>{
        setDescription(value);
    }

    const formSubmitHandler = e =>{
        e.preventDefault();
        
        if(validateInputs()){
            const data = {
                title,
                description,
                status: false
            };
            
            setTitle("");
            setDescription("");
            setTitleIsValid(true);
            setDescriptionIsValid(true);

            handleSubmit('tasklist', data)
            .then(() => {
                navigate('/');
            }).catch(err => {
                console.log(err);
            })
            
        }else{
            return;
        }
    }

    

    return (
      <div className='bg-purple-200 min-h-screen flex items-center justify-center'>
        <div className='bg-white shadow-md rounded-md p-6 w-96'>
          <h2 className='text-2xl font-bold text-purple-700 mb-4'>New Task</h2>
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
                Create Task
              </button>

              <Link
                to='/'
                className='ml-auto bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors duration-300'
                type='submit'
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
};

export default NewTask;
