import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="upper-footer">
        <div className="upper-footer-text">
          <h2>HUBUNGI KAMI</h2>
        </div>
        <button type="button" className="upper-button">
          <div className="button-animation email-icon">&#9993;</div>
          <p className="button-text">gtrone&#64;grosir.one</p>
        </button>
      </div>

      <div className="lower-footer">
        <div className="lower-footer-copy">
          <span className="copyright-symbol">&#169;</span> 2024, G1 Brand
          Advertising.
        </div>
        <div className="lower-footer-connect">
          <p>Connect With Us</p>
          <div className="social-icon">
            <ul className="social-wrapper">
              <a href='#'>
                <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                    className="linkedin"
                  ></img>
                </li>
              </a>
              <a href='#'>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                    className="twitter"
                  ></img>
                </li>
              </a>
              <a href='#'>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                    className="instagram"
                  ></img>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
