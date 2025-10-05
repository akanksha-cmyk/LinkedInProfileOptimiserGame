
import React from 'react';

interface HiredBadgeProps {
    onRestart: () => void;
}

const HiredBadge: React.FC<HiredBadgeProps> = ({ onRestart }) => {
    return (
        <div className="text-center bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in-up flex flex-col items-center">
            <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75"></div>
                <div className="relative w-32 h-32 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-5xl">🏆</span>
                </div>
            </div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
                YOU'RE HIRED!
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
                Congratulations! You've successfully optimized your LinkedIn profile. You're now ready to impress recruiters and land your dream job.
            </p>
            <button
                onClick={onRestart}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                Play Again
            </button>
        </div>
    );
};

export default HiredBadge;
