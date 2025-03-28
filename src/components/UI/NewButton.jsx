import { Link } from 'react-router-dom'

const NewButton = () => {
  return (
    <Link
      to='/task/new'
      className='fixed bottom-4 right-4 bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg'
    >
      +
    </Link> 
  );
}

export default NewButton