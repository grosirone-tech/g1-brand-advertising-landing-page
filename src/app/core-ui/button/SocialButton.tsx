import './socialButton.css';

export default function SocialButton() {
  return (
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
  );
}
