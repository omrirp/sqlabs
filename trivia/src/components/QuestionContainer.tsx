import { Question, difficultyColor } from '../utils/interfaces';
import { Button } from 'react-bootstrap';
import { shuffleArray } from '../utils/functions';
import { useEffect } from 'react';

interface QuestionContainerProps {
    questionData: Question | undefined;
    setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionContainer({
    questionData,
    setQuestionIndex,
    setCorrectAnswers,
}: QuestionContainerProps) {
    // Check if there is a question to render
    if (!questionData) {
        return null;
    }

    let answers: string[] = [...questionData.incorrect_answers, questionData.correct_answer];
    answers = shuffleArray<string>(answers);

    function answerPressHandler(isCorrect: boolean): void {
        if (isCorrect) {
            setQuestionIndex((prevIndex) => prevIndex + 1);
            setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
        } else {
            setQuestionIndex((prevIndex) => prevIndex + 1);
        }
    }

    return (
        <div className='flex' style={{ width: '100%' }}>
            <div className='flex' style={{ width: '100%', flexDirection: 'row', justifyContent: 'start' }}>
                <div className='flex' style={{}}>
                    <span style={{ fontWeight: 'bold' }} className='levelText'>
                        LEVEL:{' '}
                        <span
                            style={{ color: difficultyColor[questionData.difficulty as keyof typeof difficultyColor] }}
                        >
                            {questionData.difficulty.toUpperCase()}
                        </span>{' '}
                    </span>
                </div>
            </div>
            <div className='flex'>
                <p id='questionText'>{questionData.question}</p>
            </div>
            <div className='flex'>
                {answers.map((answer, index) => {
                    return (
                        <div key={index} style={{ width: '90%' }}>
                            <Button
                                size='lg'
                                style={{
                                    marginTop: 10,
                                    width: '100%',
                                }}
                                variant='secondary'
                                onClick={() => {
                                    answerPressHandler(answer == questionData.correct_answer);
                                }}
                            >
                                {answer}
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
