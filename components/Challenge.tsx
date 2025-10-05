
import React, { useState } from 'react';
import { GameStep } from '../types';

interface ChallengeProps {
    step: GameStep;
    onOptimize: (sectionId: string, text: string) => void;
    isLoading: boolean;
    initialValue: string;
}

const Challenge: React.FC<ChallengeProps> = ({ step, onOptimize, isLoading, initialValue }) => {
    const [text, setText] = useState(initialValue);
    const { Icon } = { Icon: step.icon };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onOptimize(step.id, text);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                     <Icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{step.title}</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{step.description}</p>
            
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={step.placeholder}
                    rows={8}
                    className="w-full p-3 bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading || !text.trim()}
                    className="mt-4 w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    {isLoading ? 'Analyzing...' : 'Optimize'}
                </button>
            </form>
        </div>
    );
};

export default Challenge;
