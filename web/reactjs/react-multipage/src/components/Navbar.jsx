import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/blogs", title: "Blogs"},
    {url: "/users", title: "Users"},
    {url: "/help", title: "Help"},
  ];

  const isActiveLink = "text-amber-600 border-b-2 border-amber-600"
  return (
    <header>
        <nav className='m-4 flex items-center justify-between'>
            <div className='bg-white p-3 shadow rounded'>Logo</div>
            <ul className='bg-white p-3 shadow rounded flex gap-4'>
                {
                  links.map((link, i)=>{
                    return (
                      <li key={i}>
                        <NavLink 
                        className={(e) => e.isActive ? isActiveLink : "hover:text-amber-600"} 
                        to={link.url}>
                          {link.title}
                        </NavLink>
                      </li>
                    );
                  })
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar