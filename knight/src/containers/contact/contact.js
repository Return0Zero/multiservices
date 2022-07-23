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
          <div className='call-us-container'>
            <div className='call-us-information'>
              <div className='call-us-name'>
                <p><b>Carlos</b> Fuentes</p>
                <p>+1 (703) 342-7948</p>
                <p><b>English</b></p>
              </div>
              <div className='call-us-name'>
                <p><b>Eva</b> Knight</p>
                <p>+1 (571) 251-6306</p>
                <p><b>Español</b></p>
              </div>
            </div>
            <div className='call-us-information'>
              <div className='call-us-information-icon'>
                <a href='tel:703-342-7948'><img src={CallIcon} alt="Call Icon" className="contact-icon"/></a>
                <p>Call Now!</p>
              </div>
              <div className='call-us-information-icon'>
              <a href='tel:571-251-6306'><img src={CallIcon} alt="Call Icon" className="contact-icon"/></a>
                <p>¡LLamanos ahora!</p>
              </div>
            </div>
          </div>
          <a href='mailto: knightmultiservices@gmail.com' className='email-information'>
            <img src={EmailIcon} alt="Email Icon" className="contact-icon"/>
            <p>knightmultiservices@gmail.com</p>
          </a>
          <div>
          <p>Currently serving <b>Ashburn</b> and the following areas:</p>
            <div className="contact-service-areas">
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
              <a href='#'><img src={FacebookIcon} alt="Facebook Icon" className="contact-icon"/></a>
              <a href='#'><img src={InstagramIcon} alt="Instagram Icon" className="contact-icon"/></a>
            </div>
          </div>
        </div>
        <Form></Form>
      </div>
    </div>
  );
}

export default Contact;
