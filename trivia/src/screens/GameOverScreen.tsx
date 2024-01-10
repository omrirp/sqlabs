import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import successIMG from '../assets/images/success_character.png';
import failedIMG from '../assets/images/failed_character.png';

export default function GameOverScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    const message = location.state && location.state.message;
    const isVictory = location.state && location.state.isVictory;
    const outcomeColor = isVictory ? '#8bc34a' : '#e53935';
    const outcomeHeaderText = isVictory ? 'GREAT JOB!' : 'FAILED';

    function newGamePressHandler() {
        navigate('/gameScreen');
    }

    return (
        <Container>
            <Row>
                <Col xs={12} className='d-flex justify-content-center alighn-items-center' style={{ marginTop: 16 }}>
                    <div
                        className='flex'
                        style={{
                            width: '100%',
                            justifyContent: 'end',
                            flexDirection: 'row',
                            backgroundColor: outcomeColor,
                            paddingTop: 10,
                            paddingBottom: 10,
                        }}
                    >
                        <Image src={logo} style={{ width: 100, marginRight: 20 }} />
                    </div>
                </Col>
                <Col xs={12} className='d-flex justify-content-center' style={{ marginTop: 16 }}>
                    <h1 style={{ color: outcomeColor }}>{outcomeHeaderText}</h1>
                </Col>
                <Col xs={12} className='d-flex justify-content-center' style={{ marginTop: 16 }}>
                    <span style={{ fontWeight: 'bold', fontSize: '2.5vw' }}>{message}</span>
                </Col>
                <Col xs={12} className='d-flex justify-content-center'>
                    <Image src={isVictory ? successIMG : failedIMG} />
                </Col>
                <Col xs={12} className='d-flex justify-content-center' style={{ marginTop: 16 }}>
                    <Button size='lg' onClick={newGamePressHandler}>
                        Start New Game
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
