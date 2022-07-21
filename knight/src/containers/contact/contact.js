import './contact.css';
import Form from '../../components/form/form'
import CallIcon from '../../images/icons/call.svg'
import EmailIcon from '../../images/icons/email.svg'
import FacebookIcon from '../../images/icons/facebook.svg'
import InstagramIcon from '../../images/icons/instagram.svg'

function Contact() {
  return (
    <div className="contact-container" id='contactID'>
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-text">
          <div>
            <div className='call-us-information'>
              <div>
                <p><b>Carlos</b> Fuentes</p>
                <p>+1 (703) 342-7948</p>
                <p><b>English</b></p>
              </div>
              <div className='call-us-information-icon'>
                <img src={CallIcon} alt="Call Icon" className="contact-icon"/>
                <p>Call Now!</p>
              </div>
            </div>
            <div className='call-us-information'>
              <div>
                <p><b>Eva</b> Knight</p>
                <p>+1 (571) 251-6306</p>
                <p><b>Español</b></p>
              </div>
              <div className='call-us-information-icon'>
                <img src={CallIcon} alt="Call Icon" className="contact-icon"/>
                <p>Call Now!</p>
              </div>
            </div>
          </div>
          <div className='email-information'>
            <img src={EmailIcon} alt="Email Icon" className="contact-icon"/>
            <p>knightmultiservices@gmail.com</p>
          </div>
          <div>
          <p>Currently serving <b>Ashburn</b> and the following areas:</p>
            <div className="service-areas">
              <ul>
                <li>Leesburgy</li>
                <li>Dulles</li>
                <li>Herndon</li>
                <li>Reston</li>
                <li>Chantilly</li>
              </ul>
              <ul>
                <li>Centreville</li>
                <li>Oakton</li>
                <li>Arlington</li>
                <li>Annandale</li>
                <li>McLean</li>
              </ul>
              <ul>
                <li>Vienna</li>
                <li>Springfield</li>
                <li>Alexandria</li>
                <li>Falls Church</li>
                <li>Fairfax</li>
              </ul>
            </div>
          </div>
          <div className='social-media-container'>
            <p>Follow Us:</p>
            <div className='social-media-icons'>
              <img src={FacebookIcon} alt="Facebook Icon" className="contact-icon"/>
              <img src={InstagramIcon} alt="Instagram Icon" className="contact-icon"/>
            </div>
          </div>
        </div>
        <Form></Form>
      </div>
    </div>
  );
}

export default Contact;
