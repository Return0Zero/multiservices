import './navbar.css';
import LogoHorizontal from '../../images/horizontal-white-logo.png';
import NavbarMobile from './navbar-mobile';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className="navbar-max-width">
      <div className="navbar-container">
        <a href='#servicesID' className='link-services'>Services</a>
        <a to="/" className='link--title-logo'><img src={LogoHorizontal} alt='logo' className='logo'/></a>
        <a href='#contactID' className='link-contact'>Contact Us</a>
      </div>
      <NavbarMobile className='navbar-mobile'></NavbarMobile>
    </div>
  );
}

export default Navbar;
