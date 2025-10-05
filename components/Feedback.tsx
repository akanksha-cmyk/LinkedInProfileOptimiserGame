
import React from 'react';
import { AIFeedback } from '../types';
import { CheckCircleIcon, LightBulbIcon, StarIcon } from './icons';

interface FeedbackProps {
    feedback: AIFeedback;
    onNext: () => void;
    isLastStep: boolean;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, onNext, isLastStep }) => {
    const scoreColor = feedback.score >= 8 ? 'text-green-500' : feedback.score >= 5 ? 'text-yellow-500' : 'text-red-500';

    return (
        <div className="animate-fade-in space-y-6">
            <div className="text-center">
                 <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Optimization Analysis</h3>
                 <div className="mt-2 flex justify-center items-center gap-2">
                    <StarIcon className={`w-10 h-10 ${scoreColor}`} />
                    <p className={`text-5xl font-black ${scoreColor}`}>{feedback.score}<span className="text-2xl font-bold text-slate-400">/10</span></p>
                 </div>
            </div>

            <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                    <CheckCircleIcon className="w-6 h-6" />
                    Strengths
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    {feedback.strengths.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>

            <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                    <LightBulbIcon className="w-6 h-6" />
                    Suggestions
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    {feedback.suggestions.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>

            <button
                onClick={onNext}
                className="w-full bg-gradient-to-r from-teal-400 to-green-500 text-white font-bold py-3 px-4 rounded-lg hover:from-teal-500 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                {isLastStep ? 'Finish & Get Hired!' : 'Next Section'}
            </button>
        </div>
    );
};

export default Feedback;
