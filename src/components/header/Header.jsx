import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Header() {
  return (
    <div className='fixed px-10 flex justify-between items-center w-full h-14 left-0'>
      <Link
        to='/'
        className='text-blue-600 font-bold  text-2xl flex items-center  gap-1'
      >
        <BiTask />
        Task Manager
      </Link>
      <div className='flex gap-10'>
        <NavLink to='/' className='text-slate-500 relative flex items-center'>
          <MdOutlineKeyboardArrowRight />
          Home
        </NavLink>
        <NavLink
          to='/todo'
          className='text-slate-500 relative  flex items-center'
        >
          <MdOutlineKeyboardArrowRight />
          Todo List
        </NavLink>
      </div>
      <div className='flex gap-3'>
        <Link
          to='/signin'
          className='bg-blue-600 p-2 rounded-md text-white hover:brightness-110'
        >
          Sign In
        </Link>
        <Link
          to='/signup'
          className='bg-blue-600 p-2 rounded-md text-white hover:brightness-110'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
