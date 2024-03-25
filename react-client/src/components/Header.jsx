import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { useSelector } from 'react-redux';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();
    const currentUser = null
    // const {currentUser} = useSelector((state)=>state.user);
  
  return (
    <Navbar className='border-b-2 px-3 bg-gradient-to-br from-teal-300/25 via-white to-blue-300/30' >
        <Link to={"/"} className='self-center whitespace-nowrap text-xl  font-semibold dark:text-white font-mono'>
            Drive.
            <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Hub</span>
            
        </Link>
       
        <div className='flex gap-2 md:order-2'>
      {
        currentUser && <Button className='w-12 h-10 '   color='gray' pill onClick={()=>navigate('/create-post')}>
                <MdAdd  className='text-2xl text-slate-800 via-purple-500' />
        </Button> 
      }
        
      
        <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
                <Link to={'/'}>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/about'} as={'div'}>
                <Link to={'/about'}>About</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header