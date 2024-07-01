type Props = {
    type?: 'primary' | 'secondary';
    onClick?: () => void;
    title: string;
}

export function Button(props: Props) {
    let {type = 'primary', onClick, title} = props;

    return (
        // TODO : Buat styling untuk primary & secondary
    <button className={type === 'primary' ? 'primary-button' : 'secondary-buttton'}>
        {title}
    </button>
    );
}
