import './footer.css';
import {Text} from '../core-ui/Text.tsx';
import Button from '../core-ui/Button.tsx';

export default function Footer() {
  return (
    <footer>
      <div className="upper-footer">
        <div className="upper-footer-text">
          <Text size="header" title="HUBUNGI KAMI" />
        </div>
        <Button type='primary' title='gtrone@grosir.one'/>
      </div>

      <div className="lower-footer">
        <div className="lower-footer-copy">
          <span className="copyright-symbol">&#169;</span>
          <Text
            size="normal"
            title="2024, G1 Brand Advertising."
            style={{marginLeft: '.2rem'}}
          />
        </div>
        <div className="lower-footer-connect">
          <Text
            size="normal"
            title="Connect with us"
            style={{textAlign: 'center', marginBottom: '.5rem'}}
          />
          <div className="social-icon">
            <ul className="social-wrapper">
              <a href="#">
                <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                    className="linkedin"
                  ></img>
                </li>
              </a>
              <a href="#">
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                    className="twitter"
                  ></img>
                </li>
              </a>
              <a href="#">
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
