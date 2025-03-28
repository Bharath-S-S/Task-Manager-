import Logo from "./Logo";



const Navigation = () => {
  return (
    <nav className='bg-purple-900 p-4 shadow'>
      <div className='flex items-center'>
        <Logo className={'w-logo'}/>
      </div>
    </nav>
  );
};

export default Navigation;
