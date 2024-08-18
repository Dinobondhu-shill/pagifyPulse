
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebase/FirebaseProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  return (
    <div className='flex justify-between items-center bg-base-200 text-base-content px-2 lg:px-20 py-2 md:py-5'>
      <div className='font-bold text-xl'>PagifyPulse</div>
      {
        user ? <div className='flex items-center mt-1'>
          <div className='md:flex gap-4 hidden  '>
          <Link>Home</Link>
          <Link>Cart</Link>
          <Link>Your Orders</Link>
          <Link>Payment</Link>
          </div>
          <div  data-tip={user?.displayName}  className="btn-circle avatar tooltip ml-3">
          <div className="w-10 rounded-full " >
            <img data-aos="zoom-in" data-aos-delay="50" src={user?.photoURL}/>
          </div>
        </div>
          <Link onClick={()=> logOut()} className='md:px-3 py-2 text-white border rounded-md bg-gray-600'>Log Out</Link> </div>: <div className='flex gap-4'>
        <Link to={"/login"} className='md:px-4 md:py-3 p-2 text-white border rounded-md bg-gray-600'>Log In</Link>
        <Link to={"/register"}  className='md:px-4 md:py-3 p-2 text-white border rounded-md bg-gray-600'>Sign Up</Link>
      </div> 
      }
    </div>
  );
};

export default Navbar;