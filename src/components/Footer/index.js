import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-heading-container">
      <img
        src="https://res.cloudinary.com/nsp/image/upload/v1635840304/tastyKitchens/logowhite_t8wfhc.png"
        alt="website-footer-logo"
        className="website-footer-logo"
      />
      <h1 className="footer-heading">Tasty Kitchens</h1>
    </div>
    <p className="footer-para">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="social-container">
      <a
        target="_blank"
        href="https://in.pinterest.com/search/pins/?q=developer&rs=typed"
        rel="noreferrer"
      >
        <span>
          <FaPinterestSquare
            testid="pintrest-social-icon"
            className="social-icon"
          />
        </span>
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/explore/tags/kitchen/"
        rel="noreferrer"
      >
        <span>
          <FaInstagram testid="instagram-social-icon" className="social-icon" />
        </span>
      </a>
      <a target="_blank" href="https://twitter.com/" rel="noreferrer">
        <span>
          <FaTwitter testid="twitter-social-icon" className="social-icon" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/DreamWorksHome/"
        rel="noreferrer"
      >
        <span>
          <FaFacebookSquare
            testid="facebook-social-icon"
            className="social-icon"
          />
        </span>
      </a>
    </div>
  </div>
)

export default Footer
