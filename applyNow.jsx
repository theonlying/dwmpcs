import React, { useState } from 'react';
import { Navbar } from './navbar';
import './CSS/applyNow.css';
import { Footer } from './footer';


export const ApplyNow = () => {
  const [toggle, setToggle] = useState(false);
  const [answer, setAnswer] = useState(null);
  const handleChange = (item) => {
    item === answer ? setAnswer(null) : setAnswer(item)
  }
  return (
    <main>
      <section className='apply'>
      <Navbar></Navbar>

      <div className='text'>
        <h1>Apply Now</h1>
        <p>Apply for our business loan in minutes, without painful</p>
      </div>
      </section>
      
      <form className='registerForm' action="">
        <div className='salaryImage'>
          <section className='staffSalary'>
            <label htmlFor="">STAFF NO
              <input type="text" name="" id="" />
            </label>

            <label htmlFor="">NET SALARY
              <input type="text" />
            </label>
          </section>

          <section className='staffStatus'> 
            STAFF STATUS
            <label htmlFor="">
             <label htmlFor="">
                1. PERMANENT
                <input type='checkbox' />
             </label>

             <label htmlFor="">
                2. CONTRACT
                <input type="checkbox" />
             </label>
            </label>
          </section>

          <section id='passport'>
            <input type="file" accept='image/*' name='image' id='file' />
            <label htmlFor="file">Upload</label>
          </section>
        </div>


        <div className='formSections'>
          <label>FIRST NAME
            <input placeholder='Enter Name' type="text" />
          </label>

          <label>LAST NAME
            <input placeholder='Enter Name' type="text" />
          </label>
        </div>

        <div className='formSections'>
          <label>LOAN AMOUNT 
            <input placeholder='₦' type="number" />
          </label>

          <label>PURPOSE OF LOAN
            <input placeholder='Loan Category' type="text" />
          </label>
         </div> 

        <section className='cooperateLoan'>
          <label id='alreadyQuestion' htmlFor="">ARE YOU ALREADY ON A COOPERATE LOAN?

          <label className='alreadyAnswer'>
            YES
            <input type='checkbox' checked={answer === "yes"} onChange={() => handleChange("yes")} onClick={() => setToggle(!toggle)}/>
          </label>

          <label className='alreadyAnswer'>
            NO
            <input type="checkbox"  checked={answer === "no"} onChange={() => handleChange("no")} />
          </label>

          </label>
          </section>

          {toggle && (
          <section className='alreadyOnLoan'>
            <label htmlFor="">HOW MUCH LOAN WAS GRANTED TO YOU?
              <input placeholder='₦' type="number" />
            </label>

            <label htmlFor="">WHEN WAS THE LOAN GRANTED TO YOU?
              <input type="date" />
            </label>
          </section>
        )}

        <div className='formSections'>
          <label htmlFor="">STATE OF ORIGIN
            <input placeholder='State' type="text" />
          </label>

          <label htmlFor="">LOCAL GOVERNMENT
            <input placeholder='Local Government Area' type="text" />
          </label>
        </div>

        <div className='formSections'>
          <label htmlFor="">NAME OF PFA
            <input placeholder='Enter Name' type="text" />
          </label>

          <label htmlFor="">PFA PIN NO
            <input placeholder='PFA PIN Number' type="number" />
          </label>
        </div>

        <div id='ippis'>
          <label htmlFor="">IPPIS NO
            <input placeholder='IPPIS Number' type="number" />
          </label>
        </div>

        <div className='formSections'>
          <label htmlFor="">BANK
            <input placeholder='Bank Name' type="text" />
          </label>

          <label htmlFor="">ACCOUNT NUMBER
            <input placeholder='Account Number' type="text" />
          </label>
        </div>

        <div className='formSections'>
          <label htmlFor="">LOAN DURATION
            <input placeholder='Loan Duration' type="text" />
          </label>

          <label htmlFor="">TELEPHONE NUMBER
            <input placeholder='Enter Phone Number' type="text" />
          </label>
        </div>

        <div className='formSections'>
          <label htmlFor="">NEXT OF KIN
            <input placeholder='Enter Name' type="text" />
          </label>

          <label htmlFor="">NO. OF NEXT OF KIN
            <input placeholder='Enter Phone Number' type="text" />
          </label>
        </div>

       <div id='staffId'>
        <label htmlFor="">STAFF ID CARD
            <input type="text" />
        </label>
       </div>

      <div id='paySlipContainer'>
        <input type="file" name='paySlip'  id='paySlip' />
        <label htmlFor="paySlip"> UPLOAD PAY SLIP</label>
      </div>

       <div className='registerButton'>
        <button>APPLY NOW</button>
       </div>
      </form>

      <Footer></Footer>
    </main>
  )
}
