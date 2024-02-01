import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import testingimage from "../../assets/testing-image.png";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  
  const sendEmail = (e) => {
      e.preventDefault();
      setIsSending(true);

      emailjs.sendForm('service_q2hv0sr', 'template_m4shwwt', form.current, '1dk2hbA7g7OV-wJn5')
        .then((result) => {
            console.log(result.text);
            // reset 
            form.current.reset();
            setIsSending(false);

        }, (error) => {
            console.log(error.text);
            setIsSending(false);

        });
    };

  return (
    <div className="contact-container background-color" id="contact">
      <div className="contact-content">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <p>Join our team as we strive to redefine the standard for curbside trash and recycling collection in residential communities, setting new benchmarks as the nation's leading provider.</p>
          <input type="text" name="Full-name" placeholder="Full Name" required />
          <input type="text" name="email" placeholder="Email*" required />
          <input type="text" name="phone" placeholder="Phone Number*" required />
          <input type="text" name="community-name" placeholder="Community Name*" required />

          <select name="number-of-units" required>
            <option value="">Number of Units</option>
            <option value="50-99 units">50-99 units</option>
            <option value="100-149 units">100-149 units</option>
            <option value="150-199 units">150-199 units</option>
            <option value="200+ units">200+ units</option>
          </select>

          <textarea rows="5" cols="50" name="message" placeholder="Your message here" required></textarea>
          <button type="submit" className="btn-contact" name="submit" disabled={isSending}>
            {isSending ? 'Message Sent' : 'Send Message'}
          </button>
        </form>
      </div>
        <div className="contact-image">
        <img src={testingimage} alt="trash-steps" />
        </div>
    </div>
  )
}

export default Contact
