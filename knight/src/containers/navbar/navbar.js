import './navbar.css';
import LogoHorizontal from '../../images/horizontal-white-logo.png'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-max-width">
      <div className="navbar-container">
        <a href='#servicesID' className='link-services'><h1 className='link-services-h1'>Services</h1></a>
        <Link to="/" className='link--title-logo'><img src={LogoHorizontal} alt='logo' className='logo'/></Link>
        <a href='#contactID' className='link-contact'><h1 className='link-contact-h1'>Contact Us</h1></a>
      </div>
      
    </div>
  );
}

export default Navbar;
