import React from 'react';
import { Navbar } from './navbar';
import './CSS/howItWorks.css';
import { Footer } from './footer';
import { useNavigate } from 'react-router-dom';
import hiwOne from './Images/hiw1.jpg';
import hiwTwo from './Images/hiw2.jpg';
import money from './Images/moneyCount.jpg';

export const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <main className='mainHow'>
      <section className='apply'>
        <Navbar></Navbar>

        <div className='text'>
          <h1>How it Works</h1>
          <p>Apply for our business loan in minutes, without painful</p>
        </div>
      </section>

      <section className='steps'>
        <div className='step'>
          <section>01</section>
          <h1>Apply for Loan</h1>
          <p>
            The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information.
          </p>
        </div>

        <div className='step'>
          <section>02</section>
          <h1>Application review</h1>
          <p>
            The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information.
          </p>
        </div>

        <div className='step'>
          <section>03</section>
          <h1>Get funding fast</h1>
          <p>
            The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information.
          </p>
        </div>
      </section>

      <section className='explanation'>
        <div className='explanationImage'>
          <section id='womanImage'>
            <img src={hiwTwo} alt={"hiwTwo"} />
          </section>

          <section id='laptopImage'>
            <img src={hiwOne} alt={"hiwOne"} />
          </section>

          <section id='moneyImage'>
            <img src={money} alt={"money"} />
          </section>

        </div>

        <div className='explanationText'>
          <h6>Thousands of customers trust our company</h6>
          <p>
            The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information. How do you grab your customers’ attention.
          </p>

          <p>
            The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information. How do you grab your customers’ attention.
          </p>

          <button onClick={() =>{
            navigate('/applyNow')
          }}>APPLY FOR LOAN</button>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
