import './navbar-mobile.css';
import LogoHorizontal from '../../images/horizontal-white-logo.png'
import HamburgerMenu from '../../images/icons/hamburger.png'
import CloseMenu from '../../images/icons/close.png'
import {useState} from 'react'


function NavbarMobile() {

  const [open, setOpen] = useState(false)

  return (
    <div className="navbar-mobile-max-width">
      <div className="navbar-mobile-container">
        <a to="/" className='link--title-logo'><img src={LogoHorizontal} alt='logo' className='logo'/></a>
        <img src={HamburgerMenu} alt='HamburgerMenu' className='hamburger-menu'
        onClick={() => setOpen(!open)}/>

        {open && 
          <a href='#servicesID' className='link-services'><h1 className='mobile-link-services-h1'>Services</h1></a>
          <a href='#contactID' className='link-contact'><h1 className='mobile-link-contact-h1'>Contact Us</h1></a>}        
        
      </div>
    </div>
  );
}

export default NavbarMobile;
