import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import img from './favicon.png'

const Header = () => {

  const { user, logOut } = useContext(AuthContext);
  console.log('context', user);
  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log.error(error));
  }


  const menuItems =
    <>
      <li className='font-semibold'><Link to='/'>Home</Link></li>

      <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
      <li className='font-semibold'><Link to='/services'>Services</Link></li>

      {
        user?.email ?
          <>
            <li className='font-semibold'><Link to='/myReviews'>myReviews</Link></li>


          </>
          :
          <li className='font-semibold'><Link to='/login'>Login</Link></li>
      }
      <li className='font-semibold'><Link to='/signup'>SignUp</Link></li>

      {user?.email && <span>Welcome, {user.email}</span>}
      <button onClick={handleSignOut} className='btn btn-sm'>Log out</button>
      
      {/* <button onClick={handleSignOut} className='btn btn-sm'></button> */}



    </>



  return (

    <div className="p-0">
      <div className="navbar bg-primary text-primary-content navbar rounded pt-1 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>

          </div>
         
            <img className='w-15 h-10 rounded p-1' src={img} alt="" />
              <Link to="/" className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-cyan-500 to-blue-500 mt-0">My luxurious kitchen</Link>



        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>

      </div>


    </div>


  );
};

export default Header;