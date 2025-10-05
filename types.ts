import type { ComponentType } from 'react';

export interface GameStep {
    id: string;
    title: string;
    description: string;
    placeholder: string;
    // FIX: Changed React.ComponentType to ComponentType after importing it.
    icon: ComponentType<{ className?: string }>;
}

export interface AIFeedback {
    score: number;
    strengths: string[];
    suggestions: string[];
}