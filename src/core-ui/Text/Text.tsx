import './text.css';

type Props = {
  size: 'header' | 'subheader' | 'normal' | 'navbar' | 'small' ;
  content: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function Text(props: Props) {
  let {size, content, className, onClick, style} = props;

  const baseClass = size === 'header' ? 'header-text'
                : size === 'subheader' ? 'subheader-text'
                : size === 'normal' ? 'normal-text'
                : size === 'navbar' ? 'navbar-text' : 'small-text';
    const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <span className={combinedClass} onClick={onClick} style={style}>
        {content}
    </span>
  );
}
;