import React from 'react';
import { Navbar } from './navbar';
import './CSS/register.css';

export const Register = () => {
  return (
    <main className='mainRegister'>
      <section className='register'>
        <Navbar></Navbar>
        <div className='text'>
          <h1>Register</h1>
          <p>Register now to become a member</p>
        </div>
      </section>

      <form action="">
        <label htmlFor="FirstName">
          <input placeholder='Enter your First Name' type="text" />
        </label>

        <label htmlFor="LastName">
          <input placeholder='Enter your Last Name' type="text" />
        </label>

        <label htmlFor="Email">
          <input placeholder='Enter your email' type="text" />
        </label>

        <label htmlFor="password">
          <input placeholder='password' type="password" />
        </label>

        <label htmlFor="Confirmpassword">
          <input placeholder='Confirm password' type="password" />
        </label>

        <button>Register</button>
      </form>
    </main>
  )
}
