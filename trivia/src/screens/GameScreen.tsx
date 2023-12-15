import { Container, Row, Col, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question } from '../utils/interfaces';
import { fetchData } from '../utils/functions';
import splashLogo from '../assets/images/splash_logo.png';
import logo from '../assets/images/logo.png';
import QuestionContainer from '../components/QuestionContainer';
import Timer from '../components/Timer';

export default function GameScreen() {
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<Question>();
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [isTimeUP, setIsTimeUP] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        callFetchData();
    }, []);

    useEffect(() => {
        if (isTimeUP) {
            // nvigate to another GameOverScreen
            const message = 'TIME IS UP!';
            navigate('/gameOverScreen', { state: { message, isVictory: false } });
        }
    }, [isTimeUP]);

    useEffect(() => {
        if (questionIndex < 10) {
            setCurrentQuestion(questions[questionIndex]);
        } else {
            // nvigate to another GameOverScreen
            if (correctAnswers >= questions.length * 0.8) {
                const message = `You answered ${correctAnswers}/${questions.length} questions correctly`;
                navigate('/gameOverScreen', { state: { message, isVictory: true } });
            } else {
                const message = `You answered ${correctAnswers}/${questions.length} questions correctly`;
                navigate('/gameOverScreen', { state: { message, isVictory: false } });
            }
        }
    }, [questionIndex]);

    const callFetchData = async () => {
        try {
            const questionsResponse: Question[] = await fetchData('https://opentdb.com/api.php?amount=10&category=18');
            setQuestions(questionsResponse);
            setCurrentQuestion(questionsResponse[0]);
            setTime(5 * questionsResponse.length);
            setDataLoaded(true);
            console.log(questionsResponse);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={12} className='d-flex justify-content-center'>
                    {!dataLoaded && <Image src={splashLogo} />}
                </Col>
                <Col className='d-flex justify-content-center' >
                    {dataLoaded && (
                        <div className='flex' style={{ width: '100%' }}>
                            <div
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}
                                className='flex triviaHeader'
                            >
                                <div className='flex' style={{ flex: 2 }}>
                                    <span id='questionNumText'>
                                        Question {questionIndex + 1}/{questions.length}
                                    </span>
                                </div>
                                <div className='flex' style={{ flex: 1 }}>
                                    <Image src={logo} style={{ width: 80 }} />
                                </div>
                            </div>
                            <QuestionContainer
                                questionData={currentQuestion}
                                setQuestionIndex={setQuestionIndex}
                                setCorrectAnswers={setCorrectAnswers}
                            />
                            {/* <div className='flex' id='timerContainer'>
                                <p id='timerText'>TIME: {seconds}</p>
                            </div> */}
                            <Timer time={time} setIsTimeUP={setIsTimeUP} />
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
