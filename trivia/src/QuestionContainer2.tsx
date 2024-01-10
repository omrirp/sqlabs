import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

type Question = {
    type: string;
    difficulty: String;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

interface QuestionContainerProps {
    questionData: Question;
}

enum difficultyColor {
    easy = '#4caf50',
    medium = '#ff9800',
    hard = '#f44336',
}

export default function QuestionContainer({ questionData }: QuestionContainerProps) {
    let answersArray: string[] = [...questionData.incorrect_answers, questionData.correct_answer];
    answersArray = shuffleArray(answersArray);

    function shuffleArray<T>(array: T[]): T[] {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    function answerpressHandler(point: number): void {
        console.log(point);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '90vh',
                height: 80,
                padding: 16,
                alignItems: 'center',
            }}
        >
            <div style={{ border: '1px solid black', width: '100%' }}>
                <p>
                    LEVEL:{' '}
                    <span style={{ color: difficultyColor[questionData.difficulty as keyof typeof difficultyColor] }}>
                        {questionData.difficulty.toUpperCase()}
                    </span>
                </p>
            </div>

            {answersArray.map((ans, index) => {
                const point: number = ans === questionData.correct_answer ? 1 : 0;
                return (
                    <div key={index} style={{ marginTop: 16, minWidth: '40%' }}>
                        <Button
                            onClick={() => {
                                answerpressHandler(point);
                            }}
                            variant='secondary'
                            style={{ width: '100%' }}
                        >
                            {ans}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}
