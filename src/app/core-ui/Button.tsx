import './button.css';
import {Text} from '../core-ui/Text.tsx';

type Props = {
  type?: 'primary' | 'secondary';
  title: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Button() {
  return (
    <>
      <button type="button" className="upper-button">
        <div className="button-animation email-icon">&#9993;</div>
        <Text
          size="small"
          title="gtrone&#64;grosir.one"
          style={{marginLeft: '3.2rem', fontSize: '1rem'}}
        />
      </button>
    </>
  );
}
