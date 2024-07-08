import { Link } from 'react-router-dom';

type ToRutubeButtonProps = {
    text: string
}

const ToRutubeButton: React.FC<ToRutubeButtonProps> = ({text}) => {
    return (
        <Link to="https://rutube.ru">
            <button className='button-submit'>
                {text}
            </button>
        </Link>
    )
}

export default ToRutubeButton;