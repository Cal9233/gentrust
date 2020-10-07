import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import "../App.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.h2 animate={{ fontSize: 50, color: "#104e8b", x: 100, y: -100 }}>
        About Us
      </motion.h2>

      <Footer />
    </div>
  );
};

export default About;
