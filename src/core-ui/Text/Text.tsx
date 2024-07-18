import './text.css';

type Props = {
  size: 'header' | 'subheader' | 'normal' | 'small';
  content: string;
  className?: string;
  onClick?: () => void;
};

export function Text(props: Props) {
  let {size, content, className, onClick} = props;

  const baseClass = size === 'header' ? 'header-text'
                : size === 'subheader' ? 'subheader-text'
                : size === 'normal' ? 'normal-text' : 'small-text';
    const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <span className={combinedClass}>
        {content}
    </span>
  );
}
;