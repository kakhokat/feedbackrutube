import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainSurveyPage from './pages/MainSurveyPage';
import AdditionalQuestionsPage from './pages/AdditionalQuestionsPage';
import ThankYouPage from './pages/ThankYouPage';
import SurveyCompletedPage from './pages/SurveyCompletedPage';
import Header from './components/Header.tsx';

export default function App () {
  const isSurveyCompleted = localStorage.getItem('isSurveyCompleted') === 'true';

    return (
        <Router>
          <div className="page-container">
            <Header />
               <Routes>
                  <Route path="/" element={isSurveyCompleted ? <Navigate to="/survey-completed" /> : <MainSurveyPage />} />
                  <Route path="/additional-questions" element={isSurveyCompleted ? <Navigate to="/survey-completed" /> : <AdditionalQuestionsPage />} />
                  <Route path="/thank-you" element={isSurveyCompleted ? <Navigate to="/survey-completed" /> : <ThankYouPage />} />
                  <Route path="/survey-completed" element={<SurveyCompletedPage />} />
               </Routes>
          </div>
        </Router>
    );
}