
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
  return (
    <div className='px-20 pt-5'> 
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default Root;