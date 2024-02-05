import React from "react";
import "./styleFooter.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <IoHomeOutline
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>H.No. 38 Teela Jamal Pura Near Ram Mandir </p>
              <p>Bhopal (M.P.) </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhoneAlt
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 9074965739{" "}
            </h4>
          </div>

          <div className="email">
            <h4>
              <IoMailUnreadOutline
                size={20}
                style={{
                  color: "white",
                  marginRight: "2rem",
                  fontWeight: "600",
                }}
              />
              anjali1412sahu@gmail.com{" "}
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fuga
            exercitationem doloremque, sint, molestiae expedita vel quibusdam
            eveniet culpa error temporibus quia odio assumenda itaque ex ducimus
            accusantium nemo eius.
          </p>
          <div className="social">
          <FaFacebook
                size={30}
                style={{
                  color: "white",
                  marginRight: "1rem",
                 
                }}
              />

              <BsInstagram
                size={30}
                style={{
                  color: "white",
                  marginRight: "1rem",
                 
                }}
              />

              <BsLinkedin
                size={30}
                style={{
                  color: "white",
                  marginRight: "1rem",
                  
                }}
              />

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
