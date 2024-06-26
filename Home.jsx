import React from "react";
import { Navbar } from "./navbar";
import "./CSS/Home.css";
import first from './Images/First Man.jpg';
import second from './Images/Second Man.jpg';
import third from './Images/Third Man.jpg';
import naira from './Images/naira.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { Footer } from "./footer";


export const Home = () => {
  const navigate = useNavigate();
  return (
    
    <main className="main_home">
      <div id="overlay"></div>

      <div className="container">
        <Navbar></Navbar>
        <section className="loan">
          <div id="trusted">Your Trusted Loans</div>
          <div id="instant">
            Get instant loan up to <span>₦200,000</span> for financial{" "}
            <span>emergency</span> and your Business growth or startup.
          </div>
          <button onClick={() =>{
            navigate('/applyNow')
          }}>APPLY FOR LOAN</button>
        </section>
      </div>

      <div className="dewisdom">
        <section className="choose">
          <p id="choose_p1">Why Choose Us</p>
          <p id="choose_p2">
            At De-wisdom Multipurpose society loan services we offer:
          </p>
        </section>

        <section className="services">
          <div className="boxes">
            <section>
              <div className="icon">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#FFFFFF"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h2>Quick & Easy</h2>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </section>

            <section>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="white"
                  class="bi bi-shield-fill-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"
                  />
                </svg>
              </div>
              <h2>Absolute Security</h2>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </section>

            <section>
              <div className="icon">
                <svg
                  width="50px"
                  height="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <title>analytics-graph-bar</title>
                  <line class="a" x1="0.5" y1="23.5" x2="23.5" y2="23.5" />
                  <path
                    class="a"
                    d="M4.5,19a.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5v4.5h3Z"
                  />
                  <path
                    class="a"
                    d="M10.5,14a.5.5,0,0,0-.5-.5H8a.5.5,0,0,0-.5.5v9.5h3Z"
                  />
                  <path
                    class="a"
                    d="M16.5,16a.5.5,0,0,0-.5-.5H14a.5.5,0,0,0-.5.5v7.5h3Z"
                  />
                  <path
                    class="a"
                    d="M22.5,9a.5.5,0,0,0-.5-.5H20a.5.5,0,0,0-.5.5V23.5h3Z"
                  />
                  <circle class="a" cx="3" cy="11.5" r="1.5" />
                  <circle class="a" cx="9" cy="6.5" r="1.5" />
                  <circle class="a" cx="15" cy="8.5" r="1.5" />
                  <circle class="a" cx="21" cy="2" r="1.5" />
                  <line class="a" x1="4.261" y1="10.45" x2="7.848" y2="7.46" />
                  <line
                    class="a"
                    x1="10.424"
                    y1="6.974"
                    x2="13.577"
                    y2="8.025"
                  />
                  <line class="a" x1="19.8" y1="2.9" x2="16.041" y2="7.285" />
                </svg>
              </div>

              <h2>Quick Aproval</h2>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </section>
          </div>

          <div className="boxes">
            <section>
              <div className="icon">
                <svg
                  width="50px"
                  height="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <title>analytics-graph-bar</title>
                  <line class="a" x1="0.5" y1="23.5" x2="23.5" y2="23.5" />
                  <path
                    class="a"
                    d="M4.5,19a.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5v4.5h3Z"
                  />
                  <path
                    class="a"
                    d="M10.5,14a.5.5,0,0,0-.5-.5H8a.5.5,0,0,0-.5.5v9.5h3Z"
                  />
                  <path
                    class="a"
                    d="M16.5,16a.5.5,0,0,0-.5-.5H14a.5.5,0,0,0-.5.5v7.5h3Z"
                  />
                  <path
                    class="a"
                    d="M22.5,9a.5.5,0,0,0-.5-.5H20a.5.5,0,0,0-.5.5V23.5h3Z"
                  />
                  <circle class="a" cx="3" cy="11.5" r="1.5" />
                  <circle class="a" cx="9" cy="6.5" r="1.5" />
                  <circle class="a" cx="15" cy="8.5" r="1.5" />
                  <circle class="a" cx="21" cy="2" r="1.5" />
                  <line class="a" x1="4.261" y1="10.45" x2="7.848" y2="7.46" />
                  <line
                    class="a"
                    x1="10.424"
                    y1="6.974"
                    x2="13.577"
                    y2="8.025"
                  />
                  <line class="a" x1="19.8" y1="2.9" x2="16.041" y2="7.285" />
                </svg>
              </div>

              <h2>Low Interest Rates</h2>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </section>

            <section>
              <div className="icon">
                <svg
                  width="50px"
                  height="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <title>analytics-graph-bar</title>
                  <line class="a" x1="0.5" y1="23.5" x2="23.5" y2="23.5" />
                  <path
                    class="a"
                    d="M4.5,19a.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5v4.5h3Z"
                  />
                  <path
                    class="a"
                    d="M10.5,14a.5.5,0,0,0-.5-.5H8a.5.5,0,0,0-.5.5v9.5h3Z"
                  />
                  <path
                    class="a"
                    d="M16.5,16a.5.5,0,0,0-.5-.5H14a.5.5,0,0,0-.5.5v7.5h3Z"
                  />
                  <path
                    class="a"
                    d="M22.5,9a.5.5,0,0,0-.5-.5H20a.5.5,0,0,0-.5.5V23.5h3Z"
                  />
                  <circle class="a" cx="3" cy="11.5" r="1.5" />
                  <circle class="a" cx="9" cy="6.5" r="1.5" />
                  <circle class="a" cx="15" cy="8.5" r="1.5" />
                  <circle class="a" cx="21" cy="2" r="1.5" />
                  <line class="a" x1="4.261" y1="10.45" x2="7.848" y2="7.46" />
                  <line
                    class="a"
                    x1="10.424"
                    y1="6.974"
                    x2="13.577"
                    y2="8.025"
                  />
                  <line class="a" x1="19.8" y1="2.9" x2="16.041" y2="7.285" />
                </svg>
              </div>

              <h2>Personal Security</h2>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </section>

            <section>
              <div className="icon">
                <svg
                  width="50px"
                  height="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <title>analytics-graph-bar</title>
                  <line class="a" x1="0.5" y1="23.5" x2="23.5" y2="23.5" />
                  <path
                    class="a"
                    d="M4.5,19a.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5v4.5h3Z"
                  />
                  <path
                    class="a"
                    d="M10.5,14a.5.5,0,0,0-.5-.5H8a.5.5,0,0,0-.5.5v9.5h3Z"
                  />
                  <path
                    class="a"
                    d="M16.5,16a.5.5,0,0,0-.5-.5H14a.5.5,0,0,0-.5.5v7.5h3Z"
                  />
                  <path
                    class="a"
                    d="M22.5,9a.5.5,0,0,0-.5-.5H20a.5.5,0,0,0-.5.5V23.5h3Z"
                  />
                  <circle class="a" cx="3" cy="11.5" r="1.5" />
                  <circle class="a" cx="9" cy="6.5" r="1.5" />
                  <circle class="a" cx="15" cy="8.5" r="1.5" />
                  <circle class="a" cx="21" cy="2" r="1.5" />
                  <line class="a" x1="4.261" y1="10.45" x2="7.848" y2="7.46" />
                  <line
                    class="a"
                    x1="10.424"
                    y1="6.974"
                    x2="13.577"
                    y2="8.025"
                  />
                  <line class="a" x1="19.8" y1="2.9" x2="16.041" y2="7.285" />
                </svg>
              </div>
              <h2>Disbursement Day</h2>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </section>
          </div>
        </section>
      </div>

      <div className="dwmpcs">
        <section id="dwmpcs_one">Already have a <span>DWMPCS</span> loan?</section>
        <section id="dwmpcs_two">if you're thinking about borrowing more, we're here to help</section>
        <button>FIND OUT MORE</button>
      </div>

      <div className="team">
        <p>Our Loan Section Team Members </p>
        <h1>Take a look to our professional team members.</h1>

        <section className="members">
          <div>
            <img src={first} alt={"Manager"} />
          </div>

          <div>
            <img src={second} alt={"CFO"} />
          </div>

          <div>
            <img src={third} alt={"COO"} />
          </div>
        </section>
      </div>

      <div className="personal_loan">
        <span>How a personal loan can help</span>
        <section className="paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem repellat magni facilis dolorem. Quisquam reprehenderit odit enim corporis tempore, cumque id, amet aperiam accusamus quos dolore, omnis obcaecati? Quo explicabo rem voluptatem voluptas animi.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem repellat magni facilis dolorem. Quisquam reprehenderit odit enim corporis tempore, cumque id, amet aperiam accusamus quos dolore, omnis obcaecati? Quo explicabo rem voluptatem voluptas animi.
          </p>
        </section>
        <section className="options">
          <ul>
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Buying a car</li>
            </div>
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Take control of your finances</li>
            </div>
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Pay school tuitions</li>
            </div>
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Adding value to your home</li>
            </div>
            
            
          </ul>

          <ul>
          <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Increese your budget</li>
            </div>
            
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Get a new card</li>
            </div>

            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Go on a holliday</li>
            </div>
            
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Have a day to remember</li>
            </div>
          </ul>

          <ul>
          <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Renovate your home</li>
            </div>
            
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Get an Insurance</li>
            </div>
            
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Help your kids</li>
            </div>
            
            <div className="items">
              <section>
                <i class="bi bi-chevron-right"></i>
              </section>
              <li>Take a trip</li>
            </div>
          </ul>
          
        </section>
      </div>

      <div className="help">
        <section className="help_image">
          <img src={naira} alt={"naira"} />
        </section>
        <section className="help_text">
          <h1>We're here to help</h1>
          <span>Monday to Thurday (8am to 8pm) and Friday(8am to 5pm).</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed tempora laborum accusamus deleniti eaque consequatur error nam incidunt? Excepturi ducimus cum maxime, sint possimus sequi velit ipsum magnam laudantium ullam fuga ratione eligendi ipsa aperiam doloremque quas amet saepe asperiores ad fugit hic iusto consequuntur? Delectus cupiditate quisquam maxime.</p>
          <h2>+2347012396713</h2>
          <h2>dewisdommpcs@gmail.com</h2>
        </section>
      </div>

      <Footer></Footer>

    </main>
  );
};
