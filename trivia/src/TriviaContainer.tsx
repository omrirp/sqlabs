import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import QuestionContainer from './QuestionContainer2';

type Question = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

interface Questions {
    questions: Question[];
}

export default function TriviaContainer({ questions }: Questions) {
    const [questionsArray, setQuestionArray] = useState<Question[]>(questions);
    const [questionNum, setQuestionNum] = useState<number>(0);

    return (
        <Container>
            <Row>
                <Col xs={12} className='d-flex justify-content-center align-items-center'>
                    <div
                        style={{
                            display: 'flex',
                            width: '90vh',
                            flexDirection: 'row',
                            height: 80,
                            backgroundColor: '#03a9f4',
                            padding: 16,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: 4 }}>
                            <p style={{ fontSize: 50 }}>
                                Question {questionNum + 1}/{questionsArray.length}
                            </p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <Image src='./images/logo.png' style={{ width: 50 }} />
                        </div>
                    </div>
                </Col>
                <Col xs={12} className='d-flex justify-content-center align-items-center'>
                    <QuestionContainer questionData={questionsArray[0]} />
                </Col>
            </Row>
        </Container>
    );
}
