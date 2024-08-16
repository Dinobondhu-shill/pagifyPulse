
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-base-200 text-base-content px-20 py-5'>
      <div className='font-bold text-xl'>PagifyPulse</div>
      <div className='flex gap-4'>
        <Link className='px-4 py-3 text-white border rounded-md bg-gray-600'>Log In</Link>
        <Link className='px-4 py-3 text-white border rounded-md bg-gray-600'>Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;