import './footer.css';
import {Text} from '../core-ui/text/Text';
import SocialButton from '../core-ui/button/SocialButton.tsx';

export default function Footer() {
  return (
    <footer>
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
          <SocialButton />
        </div>
      </div>
    </footer>
  );
}
