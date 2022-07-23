import './header.css';
import CleaningCrew from '../../images/vectors/cleaning-crew.svg';
import ThinStar from '../../images/icons/star1.svg';
import ThickStar from '../../images/icons/star2.svg';
import OrangeTopDesign from '../../images/vectors/orange-top-design.svg';
import MobileOrangeTopDesign from '../../images/vectors/mobile-orange-top-design.svg';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <img src={ThickStar} alt="Thick Star" className="star thick-star1"/>
        <img src={ThickStar} alt="Thick Star" className="star thick-star2"/>
        <img src={ThickStar} alt="Thick Star" className="star thick-star3"/>
        <img src={ThickStar} alt="Thick Star" className="star thick-star4"/>
        <img src={ThinStar} alt="Thin Star" className="star thin-star1"/>
        <img src={ThinStar} alt="Thin Star" className="star thin-star2"/>
        <img src={ThinStar} alt="Thin Star" className="star thin-star3"/>
        <img src={ThinStar} alt="Thin Star" className="star thin-star4"/>
        <div className="header-text">
          <h1 className="header-h1" >We are the solution to all your cleaning and maintenance problems</h1>
          <p className="header-p">Outstanding Landscaping, Commercial and Residential Cleaning Services in the DMV area.</p>
          <a className="header-button" href='#contactID'>Contact Us Now!</a>
        </div>
        <img src={CleaningCrew} alt="Cleaning Crew" className="cleaningcrew"/>
        <img src={OrangeTopDesign} alt="Orange Top Design" className="orange-top-design"/>
        <img src={MobileOrangeTopDesign} alt="Orange Top Design" className="mobile-orange-top-design"/>
      </div>
    </div>
  );
}

export default Header;
