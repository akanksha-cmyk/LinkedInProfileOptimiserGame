
import React from 'react';

interface ProgressBarProps {
    progress: number;
    stepTitle: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, stepTitle }) => {
    return (
        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{stepTitle}</h2>
                <span className="text-sm font-bold text-blue-500">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
