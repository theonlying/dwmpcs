import React from 'react';
import {ReactComponent as Dwmpcs} from './Images/DWMPCS-01.svg';
import './CSS/footer.css';
import { useNavigate } from 'react-router-dom';


export const Footer = () => {
  const navigate = useNavigate();

  return (
    <main className="end">
        <Dwmpcs></Dwmpcs>
        <div className="resources">
          <span>Recourses</span>
          <ul>
            <li onClick={() => {
              navigate('/')
            }}>Home</li>

            <li onClick={() => {
              navigate('/aboutUs')
            }}>About Us</li>

            <li onClick={() => {
              navigate('/contactUs')
            }}>Contact Us</li>

            <li onClick={() => {
              navigate('/howItWorks')
            }}>How it Works</li>

            <li onClick={() => {
              navigate('/register')
            }}>Register</li>
            {/* <li>Why Choose Us</li>
            <li>Already have a dwmpcs loan</li>
            <li>Team Members</li>
            <li>We're here to help</li> */}

          </ul>
        </div>

        <div className="resources">
          <span>Information</span>
          <ul>
            <li>+2347035261504</li>
            <li>+2349037452077</li>
            <li>+2347012396713</li>
            <li>dewisdommpcs@gmail.com</li>
            <li>Address: Spring Road, Calabar, Cross River</li>
          </ul>
        </div>

      <div>
          <section>
            
          </section>
          <div className="socialMedia">
            <section>
              <i class="bi bi-instagram"></i>
            </section>

            <section>
              <i class="bi bi-facebook"></i>
            </section>

            <section>
              <i class="bi bi-twitter"></i>
            </section>

            <section>
            <i class="bi bi-youtube"></i>
            </section>
            
          </div>

          <p>copyright ©2024 All rights resreved</p>
          <p> Designed by: theonlying_</p>
        </div>
        
      </main>

  )
}
