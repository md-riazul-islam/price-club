import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, name: 'home', path: '/home'},
        {id: 2, name: 'product', path: '/product'},
        {id: 3, name: 'orders', path: '/orders'},
        {id: 4, name: 'contact', path: '/contact'},
        {id: 5, name: 'about', path: '/about'},
    ]
    function isAdmin(user){
        return(user ? 'Admin' : 'normal')
    }
    const result = isAdmin(true)
    console.log(result)
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={()=> setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open?  <XMarkIcon />: <Bars3Icon />
            }
            </div>
            
            
            <ul className={`bg-purple-200  p-6 w-full md:flex justify-center absolute duration-500 ease-in md:static ${open ? 'top-6' : '-top-32'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;