import './button.css';
import {Text} from '@/core-ui/text/Text';
import {ReactNode} from 'react';

type Props = {
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  content: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: ReactNode;
};

export function Button(props: Props) {
  const {type, content, className, style, onClick, icon} = props;

  return (
    <button
      type="button"
      className={`${
        type === 'primary' ? 'primary-button' : 'secondary-button'
      } ${className}`}
      style={style}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <Text size="normal" content={content} />
    </button>
  );
}
