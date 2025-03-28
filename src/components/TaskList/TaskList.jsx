import { useEffect, useState } from "react";
import { fetchAll } from "../../handle/handleFetch";
import TaskItem from "./TaskItem";
import NewButton from "../UI/NewButton.jsx"

const TaskList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      fetchAll("tasklist")
        .then((data) => {
          setTasks(data);
          setIsLoading(false);
        })
        .catch(() => {
          setTasks([]);
        });
    }
    
    fetchData();
    
  },[])



  let allTasks = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
      />
    );
  });

  return (
    <>
      <NewButton />
      <ul className='m-auto w-9/12'>
        {isLoading || allTasks.length === 0 ? (
          <h3 className='text-3xl mt-4 text-center'>No tasks</h3>
        ) : (
          allTasks
        )}
      </ul>
    </>
  );
};

export default TaskList;
