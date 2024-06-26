import React from 'react';
import './CSS/navbar.css';
import {ReactComponent as Dwmpcs} from './Images/DWMPCS-01.svg';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <main className="main_navbar">
        <div id='logo'>
          <Dwmpcs></Dwmpcs>
          {/* <img  src={logo} alt={"LOGO"} /> */}
        </div>

        <div>
          <ul className='nav_ul'>
            <li onClick={() => {
              navigate('/')
            }}>HOME</li>
            
            <li onClick={() => {
              navigate('/aboutUs')
            }}>ABOUT US</li>

            <li onClick={() => {
              navigate('/contactUs')
            }}>CONTACT US</li>

            <li onClick={() => {
              navigate('/howItWorks')
            }}>HOW IT WORKS</li>
          </ul>
        </div>

        <button onClick={() => {
          navigate('/register')
        }} className='navbutton'>REGISTER</button>
    </main>
  )
}
