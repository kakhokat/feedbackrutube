import { useState } from 'react';
import ButtonRow from '../components/ButtonRow.tsx';
import '../styles/main.scss';
import IMAGES from '../assets/assets.tsx';
import { useNavigate } from 'react-router-dom';



export default function MainSurveyPage() {
    const [rating, setRating] = useState<number | null>(null);
    const navigate = useNavigate();
  
    const handleRatingClick = (value: number) => {
        setRating(value);
        navigate('/additional-questions?rating=' + value);
    };

    return (
        <div className="content-container">
            <div className="main-survey-page container">
                <img src={IMAGES.MainSurveyImage} alt="MainSurveyImage" />
                <h1>Уважаемый клиент!</h1>
                <p>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>
                <div>
                    <div className="rating">
                        <ButtonRow start={0} end={9} activeButton={rating} onButtonClick={handleRatingClick} />
                    </div>
                    <div className="rating-description">
                        <span>Хуже некуда</span>
                        <span>Отлично</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
