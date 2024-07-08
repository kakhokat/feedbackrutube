import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonRow from '../components/ButtonRow.tsx';
import ButtonCol from '../components/ButtonCol.tsx';
import '../styles/main.scss';


export default function AdditionalQuestionsPage() {
    const [answers, setAnswers] = useState<{ questionID: number; responseID: number }[]>([]);
    const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
    const location = useLocation();
    const isSurveyCompleted = localStorage.getItem('isSurveyCompleted');
    const navigate = useNavigate();

    useEffect(() => {
        const savedAnswers = localStorage.getItem('additional-questions');
        if (savedAnswers) {
            setAnswers(JSON.parse(savedAnswers));
        }
    }, []);

    const handleAnswerChange = (questionID: number, responseID: number) => {
        let updatedAnswers = answers.filter(answer => answer.questionID !== questionID);
        updatedAnswers.push({ questionID, responseID });
        setAnswers(updatedAnswers);
        localStorage.setItem('additional-questions', JSON.stringify(updatedAnswers));
        checkFormCompletion(updatedAnswers);
    };

    const checkFormCompletion = (answers: { questionID: number; responseID: number }[]) => {
        const requiredQuestions = [1, 2, 3, 4, 5, 6];
        const isComplete = requiredQuestions.every(id =>
            answers.some(answer => answer.questionID === id)
        );
        setIsFormComplete(isComplete);
    };

    const handleSubmit = () => {
        if (isFormComplete && isSurveyCompleted !== 'true') {
            const rating = new URLSearchParams(location.search).get('rating');
            localStorage.setItem('surveyRating', rating || '');
            localStorage.setItem('surveyAnswers', JSON.stringify(answers));
            localStorage.setItem('isSurveyCompleted', 'true');
            navigate('/thank-you');
        } else if (isSurveyCompleted === 'true') {
            navigate('/survey-completed');
        }
    };

    return (
        <div className="additional-questions-page">
            <p className='title-paragraph'>Пожалуйста, ответьте на дополнительные вопросы.</p>
            <div>
                <div className="button-column">
                    <p>1. Как быстро вы получили ответ от клиентского сервиса RUTUBE? *</p>
                    <ButtonCol options={["Быстрее, чем ожидал", "Как и ожидал", "Медленее, чем ожидал"]} activeButton={answers.find(answer => answer.questionID === 1)?.responseID || 0} onButtonClick={(value) => handleAnswerChange(1, value)} />
                </div>
                <div>
                    <p>2. Клиентский сервис RUTUBE помог в решении проблемы? *</p>
                    <ButtonRow start={1} end={5} activeButton={answers.find(answer => answer.questionID === 2)?.responseID || null} onButtonClick={(value) => handleAnswerChange(2, value)} />
                </div>
                <div>
                    <p>3. Специалист RUTUBE хорошо изъяснялся и владел языком? *</p>
                    <ButtonRow start={1} end={5} activeButton={answers.find(answer => answer.questionID === 3)?.responseID || null} onButtonClick={(value) => handleAnswerChange(3, value)} />
                </div>
                <div>
                    <p>4. Специалист RUTUBE был отзывчив? *</p>
                    <ButtonRow start={1} end={5} activeButton={answers.find(answer => answer.questionID === 4)?.responseID || null} onButtonClick={(value) => handleAnswerChange(4, value)} />
                </div>
                <div>
                    <p>5. Специалист RUTUBE был компетентен? *</p>
                    <ButtonRow start={1} end={5} activeButton={answers.find(answer => answer.questionID === 5)?.responseID || null} onButtonClick={(value) => handleAnswerChange(5, value)} />
                </div>
                <div>
                    <p>6. Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу? *</p>
                    <ButtonRow start={1} end={10} activeButton={answers.find(answer => answer.questionID === 6)?.responseID || null} onButtonClick={(value) => handleAnswerChange(6, value)} />
                </div>
            </div>
            <button className="button-submit" disabled={!isFormComplete} onClick={handleSubmit}>
                Отправить ответы
            </button>
        </div>
    );
}
