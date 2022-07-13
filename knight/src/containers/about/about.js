import './about.css';
import OrangeBottomDesign from '../../images/vectors/orange-bottom-design.svg';
import VerticalDarkLogo from '../../images/vertical-dark-logo.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={OrangeBottomDesign} alt="Orange bottom Design" className="orange-bottom-design"/>
        <div className="about-text-logo">
          <img src={VerticalDarkLogo} alt="Logo" className="vertical-dark-logo"/>
          <div className="about-text">
            <p>A reliable Family-Owned business focus on keeping the highest standards with a touch of home.</p>
            <p>We are a leading company in the area providing Commercial and Residential Cleaning, Lawn Care Maintenance, Gutter Cleaning, Power Washing, and more!</p>
            <p>Currently serving Ashburn and the following areas:</p>
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
        </div>
      </div>
    </div>
  );
}

export default About;
