import React from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {useState} from "react";

const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen]= useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen)}
  return (
    <div className='container pt-8 bg-pink-500 '>

        <div className='flex justify-between items-center'>
<div className='text-xl font-large flex justify-center item-left'>Aqsa Abdul Qadir</div>
<ul className='gap-10 lg:gap-16 hidden md:flex'>
    <li className='menuLink'><a href='#Hero'>Home</a></li>
    <li className='menuLink'><a href='#About'>About</a></li>
    <li className='menuLink'><a href='#Contact'> Contact</a></li>
    <li className='menuLink'><a href='#Projects'> Projects</a></li>
    <li className='menuLink'><a href='#Skills'> Skills</a></li>
    
</ul>
<div className='md:hidden' onClick={toggleMenu}> {isMenuOpen ? <IoMdClose size={30}/> : 
<IoMdMenu size={30}/>} </div>
        </div>
        {isMenuOpen && (
          <ul className='gap-10 lg:gap-16 flex flex-col items-center justify-center md:hidden'>
          <li className='menuLink'>
          <a href='#Hero' onClick={toggleMenu}>Home</a></li>
          <li className='menuLink'>
          <a href='About' onClick={toggleMenu}>About</a></li>
          <li className='menuLink'>
          <a href='#Contact' onClick={toggleMenu}>Contact Us</a></li>
          <li className='menuLink'>
          <a href='#Projects' onClick={toggleMenu}>Projects</a></li>
          <li className='menuLink'>
          <a href='#Skills' onClick={toggleMenu}>Skills</a></li>
          
          </ul>

        )}
      
    </div>
  );
};

export default Navbar
