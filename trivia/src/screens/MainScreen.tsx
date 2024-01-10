import { Container, Row, Col, Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function MainScreen() {
    const navigate = useNavigate();

    function playClickHandler() {
        navigate('/gameScreen');
    }
    return (
        <Container>
            <Row>
                <Col xs={12} className='d-flex justify-content-center'>
                    <Image src={logo} style={{ width: 300, marginTop: 20 }} />
                </Col>
                <Col xs={12} className='d-flex justify-content-center' style={{ marginTop: 20 }}>
                    <Button onClick={playClickHandler} size='lg'>
                        LETS PLAY!
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
