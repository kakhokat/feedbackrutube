import ToRutubeButton from '../components/ToRutubeButton';
import IMAGES from '../assets/assets.tsx';

export default function SurveyCompletedPage() {
    return (
        <>
        <div className="content-container">
            <div className="survey-completed-page">
                <img src={IMAGES.SurveyCompletedImage} alt="SurveyCompletedImage" />
                <h1>Вы уже прошли этот опрос</h1>
                <p>Спасибо, что делитесь мнением и помогаете нам быть лучше</p>
                <ToRutubeButton text={'Перейти на RUTUBE'}/>
            </div>
        </div>
        </>
    );
};
