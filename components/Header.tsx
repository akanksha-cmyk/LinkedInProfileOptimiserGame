
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    LinkedIn Profile Optimizer
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Level up your profile and get hired!</p>
            </div>
        </header>
    );
};

export default Header;
