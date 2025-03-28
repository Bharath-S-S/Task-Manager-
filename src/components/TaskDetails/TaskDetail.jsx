import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchOne } from '../../handle/handleFetch';
import { deleteOne } from '../../handle/handleDelete';
import Task from './Task';




const TaskDetail = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
      const fetchData = async () =>{
        fetchOne("tasklist", id)
          .then((data) => {
            setData(data);
            setIsLoading(false);
          })
          .catch((e) => {
            console.log("error hai bhai error hai\n", e);
          });
      }
      fetchData();
    },[])
    

  const deleteTaskHandler = async () =>{
    deleteOne('tasklist', id)
    .catch(error => console.log('error deleting', error));
  }

  return (
    <>
      {
      isLoading 
      ? 
      <h3 className='text-3xl text-orange-600 m-4 text-center'>Please wait</h3> 
      : 
      <Task deleteTask={deleteTaskHandler} id={id} data={data}/>
      }
    </>
  )
}



export default TaskDetail;
