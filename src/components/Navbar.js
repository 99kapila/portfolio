import React from 'react';
import { NavLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  return (
    <nav className="bg-slate-gradient border-b-2 border-white fixed top-0 z-20 w-full">
      <div className="flex flex-col items-center justify-between w-full px-4 py-4 md:flex-row md:px-20">
        <div className="text-white text-xl font-bold cursor-pointer">
          Shivanshu Kapila
        </div>
        <div className="flex gap-4">
          <NavLink to="/about" className="text-white hover:text-shade-blue">About</NavLink>
          <NavLink to="/experience" className="text-white hover:text-shade-blue">Experience</NavLink>
          <NavLink to="/projects" className="text-white hover:text-shade-blue">Projects</NavLink>
        </div>
        <div className="flex gap-4">
          <NavLink to="mailto:shivanshu38@gmail.com" className="text-white hover:text-shade-blue">
            <EmailIcon />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/shivanshu-kapila/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-shade-blue">
            <LinkedInIcon />
          </NavLink>
          <NavLink to="https://github.com/99kapila" target="_blank" rel="noopener noreferrer" className="text-white hover:text-shade-blue">
            <GitHubIcon />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
