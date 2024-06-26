import React from "react";
import { Navbar } from "./navbar";
import "./CSS/contactUs.css";
import { Footer } from "./footer";

export const ContactUs = () => {
  return (
    <main className="mainContact">
      <section className="contact">
        <Navbar></Navbar>
        <div className="text">
          <h1>Contact</h1>
          <p>Apply for our business loan in minutes, without painful</p>
        </div>
      </section>

      <section className="address">
        <div className="contactInfo">
          <span className="officeTitle">Main Office</span>
          <div id="springRoad">
            <span className="officeIcons"><i class="bi bi-geo-alt-fill"></i></span>
            <p>De-Wisdom House, Knowledge Court, Spring Road, Calabar, Cross River</p>
          </div>

          <div>
            <span className="officeIcons"><i class="bi bi-telephone-fill"></i></span>
            <p>+2349037452077</p>
          </div>

          <div>
            <span className="officeIcons"><i class="bi bi-envelope-fill"></i></span>
            <p>dewisdommpcs@gmail.com</p>
          </div>
        </div>

        <div className="contactInfo">
          <span className="officeTitle">Unical Office</span>
          <div id="unical">
            <span className="officeIcons"><i class="bi bi-geo-alt-fill"></i></span>
            <p> University of calabar, Behind Unical Printing Press by Hall 2, Calabar, Cross River</p>
          </div>

          <div>
            <span className="officeIcons"><i class="bi bi-telephone-fill"></i></span>
            <p>+2347035261504</p>
          </div>

          <div>
            <span className="officeIcons"><i class="bi bi-envelope-fill"></i></span>
           <p> dewisdommpcs@gmail.com</p>
          </div>
        </div>
      </section>

      <section>
        <span>1.Spring Road, Calabar,Cross River</span>
        <div id="map1">
          <iframe
            width="720"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="DWMPCS Spring Road"
            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Spring%20Road,%20Calabar,%20Cross%20River+(DWMPCS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </section>

      <section>
        <span>2. Unical Office: Behind Unical Printing  Press by Hall 2</span>
        <div id="map2">
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Unical DWMPCS" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=University%20of%20Calabar+(Unical%20Office)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};
