import { useEffect } from 'react';
import ToRutubeButton from '../components/ToRutubeButton';
import IMAGES from '../assets/assets.tsx';

export default function ThankYouPage() {
    useEffect(() => {
        if (localStorage.getItem('isSurveyCompleted') === 'true') {
            const rating = localStorage.getItem('surveyRating');
            const answers = JSON.parse(localStorage.getItem('surveyAnswers') || '[]');
            console.log('Rating:', rating);
            console.log('Additional Answers:', answers);
        }
    }, []);

    return (
        <div className="content-container">
            <div className="thank-you-page">
                <img src={IMAGES.ThankYouImage} alt="ThankYouImage" />
                <h1>Спасибо за обратную связь!</h1>
                <p>Это поможет нам улучшить сервис</p>
                <ToRutubeButton text={'Перейти на платформу'} />
            </div>
        </div>
    );
}
