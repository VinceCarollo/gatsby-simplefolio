import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Would you like to work with me? Awesome!</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vincecarollo@gmail.com"
            >
              Let&apos;s Talk
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
