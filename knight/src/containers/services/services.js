import './services.css';
import CleaningServices from '../../images/vectors/cleaning.svg';
import LandscapingServices from '../../images/vectors/landscaping.svg';
import PowerwashingServices from '../../images/vectors/powerwashing.svg';

function Services() {
  return (
    <div className="services-container" id='servicesID'>
      <div className="services-content">
        <div className="services-text">
          <h2>Cleaning Services</h2>
          <p>We offer the best services for Commercial as well as Residential Cleaning Services. Experienced to do routine cleaning or even a single service cleaning, moving-in/moving-out cleanings.</p>
          <p>Houses, apartments, offices, trash removal, and more!</p>
        </div>
        <img src={CleaningServices} alt="Cleaning Services" className="services-cleaning-images"/>
      </div>
      <div className="services-content">
        <img src={LandscapingServices} alt="Landsacaping Services" className="services-landscaping-images"/>
        <div className="services-text">
          <h2>Landscaping</h2>
          <p>There's more to a garden than just a patch of lawn and we want to help you enjoy it.</p>
          <div className="service-areas">
              <ul>
                <li>Mowing</li>
                <li>Planting</li>
                <li>Sodding </li>
              </ul>
              <ul>
                <li>Seeding</li>
                <li>Edging</li>
                <li>Weed Control</li>
              </ul>
              <ul>
                <li>Mulching</li>
                <li>and more!</li>
              </ul>
            </div>
        </div>
      </div>
      <div className="services-content">
        <div className="services-text">
          <h2>Other Services</h2>
          <p>Here at Knight Multiservices we want to make sure that you can enjoy your home as much as possible that is why we offer you Power Washing, Gutter Cleaning, and more!</p>
          <p>Contact us today for your free and easy estimate.</p>
        </div>
        <img src={PowerwashingServices} alt="Powerwashing Services" className="services-powerwashing-images"/>
      </div>
    </div>
  );
}

export default Services;
