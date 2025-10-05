
import { GameStep } from './types';
import { UserIcon, BriefcaseIcon, AcademicCapIcon, SparklesIcon, DocumentTextIcon } from './components/icons';

export const GAME_STEPS: GameStep[] = [
    {
        id: 'headline',
        title: 'LinkedIn Headline',
        description: 'Your headline is the first thing recruiters see. Make it catchy and informative. Include your role, key skills, and what you bring to the table.',
        placeholder: 'e.g., Senior Software Engineer at TechCorp | React, TypeScript, Node.js | Building Scalable Web Applications',
        icon: UserIcon
    },
    {
        id: 'about',
        title: 'About Section',
        description: 'This is your professional story. Summarize your experience, highlight your top skills, and express your career aspirations. Write in the first person.',
        placeholder: 'e.g., With over 8 years of experience in full-stack development, I specialize in creating user-centric applications... I am passionate about clean code and collaborative environments...',
        icon: DocumentTextIcon
    },
    {
        id: 'experience',
        title: 'Work Experience',
        description: 'Describe your most recent or relevant role. Use bullet points to showcase your achievements, not just responsibilities. Quantify your impact with numbers.',
        placeholder: 'e.g., - Led a team of 4 engineers to launch a new feature that increased user engagement by 15%.\n- Reduced API response time by 200ms through performance optimization.',
        icon: BriefcaseIcon
    },
    {
        id: 'skills',
        title: 'Top Skills',
        description: 'List your top 5-10 most relevant skills for the jobs you\'re targeting. This helps you appear in recruiter searches.',
        placeholder: 'e.g., JavaScript, TypeScript, React, Node.js, AWS, Agile Methodologies, CI/CD, Team Leadership',
        icon: SparklesIcon
    },
    {
        id: 'education',
        title: 'Education',
        description: 'Briefly list your degree, university, and graduation year. You can also include relevant coursework or academic achievements.',
        placeholder: 'e.g., Bachelor of Science in Computer Science - University of Technology (2015)',
        icon: AcademicCapIcon
    },
];
