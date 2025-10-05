
import React, { useState, useCallback, useMemo } from 'react';
import { GoogleGenAI } from '@google/genai';
import { GAME_STEPS } from './constants';
import { AIFeedback, GameStep } from './types';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Challenge from './components/Challenge';
import Feedback from './components/Feedback';
import HiredBadge from './components/HiredBadge';
import Loader from './components/Loader';
import { getAIFeedback } from './services/geminiService';

const App: React.FC = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [userInputs, setUserInputs] = useState<Record<string, string>>({});
    const [feedback, setFeedback] = useState<Record<string, AIFeedback | null>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [gameComplete, setGameComplete] = useState(false);

    const currentStep: GameStep = useMemo(() => GAME_STEPS[currentStepIndex], [currentStepIndex]);

    const handleOptimize = useCallback(async (sectionId: string, text: string) => {
        setIsLoading(true);
        setError(null);
        setFeedback(prev => ({ ...prev, [sectionId]: null }));

        setUserInputs(prev => ({ ...prev, [sectionId]: text }));

        try {
            const aiFeedback = await getAIFeedback(sectionId, text);
            setFeedback(prev => ({ ...prev, [sectionId]: aiFeedback }));
        } catch (err) {
            console.error("Error fetching AI feedback:", err);
            setError("Sorry, I couldn't generate feedback right now. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, []);
    
    const handleNext = () => {
        if (currentStepIndex < GAME_STEPS.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
        } else {
            setGameComplete(true);
        }
    };

    const handleRestart = () => {
        setCurrentStepIndex(0);
        setUserInputs({});
        setFeedback({});
        setIsLoading(false);
        setError(null);
        setGameComplete(false);
    };

    const isFeedbackReceived = !!feedback[currentStep.id];
    const progress = (currentStepIndex / (GAME_STEPS.length - 1)) * 100;

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                {gameComplete ? (
                    <HiredBadge onRestart={handleRestart} />
                ) : (
                    <>
                        <ProgressBar progress={progress} stepTitle={currentStep.title} />
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <Challenge
                                step={currentStep}
                                onOptimize={handleOptimize}
                                isLoading={isLoading}
                                initialValue={userInputs[currentStep.id] || ''}
                            />
                            <div className="min-h-[400px] bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col justify-center">
                                {isLoading && <Loader />}
                                {error && <p className="text-center text-red-500">{error}</p>}
                                {feedback[currentStep.id] && (
                                    <Feedback 
                                        feedback={feedback[currentStep.id]!} 
                                        onNext={handleNext}
                                        isLastStep={currentStepIndex === GAME_STEPS.length - 1}
                                    />
                                )}
                                {!isLoading && !error && !feedback[currentStep.id] && (
                                    <div className="text-center text-slate-500 dark:text-slate-400">
                                        <p className="text-lg font-medium">Awaiting your brilliance...</p>
                                        <p className="mt-2 text-sm">Enter your content on the left and hit "Optimize" to get AI-powered feedback.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default App;
