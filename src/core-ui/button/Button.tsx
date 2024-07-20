import './button.css';
import {Text} from '../text/Text';

type Props = {
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  content: string;
  className?: string;
  style?: React.CSSProperties;
};

export function Button(props: Props) {
  const {type, content, className, style, onClick} = props;

  return (
    <button
      type="button"
      className={type === 'primary' ? 'primary-button' : 'secondary-button'}
      style={style}
    >
      <div className="button-animation email-icon"></div>
      <Text size="normal" content={content} />
    </button>
  );
}
