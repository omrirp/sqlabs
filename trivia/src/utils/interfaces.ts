export interface Question {
    type: string;
    difficulty: string;
    category: string;
    question: String;
    correct_answer: string;
    incorrect_answers: string[];
}

export enum difficultyColor {
    easy = '#4caf50',
    medium = '#ff9800',
    hard = '#f44336',
}
