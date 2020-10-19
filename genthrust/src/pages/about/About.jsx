import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Us from "../../images/img-8.png";
import Parts from "../../images/img-9.png";
import "../about/About.css";
import "../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="title">
        <h1>About Us!</h1>
      </div>
      <div className="about-container">
        <img className="photo" src={Us} alt="GenThrust" data-aos="fade-right" />
        <p className="summary" data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          illum assumenda molestiae, dolorum provident dolore quaerat
          accusantium. Possimus consequatur delectus blanditiis quos expedita,
          placeat maxime illum, exercitationem vero repellat consequuntur!
        </p>
      </div>
      <div className="service">
        <h2>What we do</h2>
        <div className="second-container">
          <p className="service" data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est
            dolorem nam dolor asperiores, impedit veritatis praesentium dolores
            pariatur ipsum adipisci nobis libero aut dolore quisquam id animi
            velit laudantium.
          </p>
          <img
            className="photo2"
            src={Parts}
            alt="parts"
            data-aos="fade-left"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
