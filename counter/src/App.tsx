import { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    useEffect(() => {
        if (count > 20) {
            decrement();
            toast.error('count cannot be greater then 20 !');
            return;
        }
        if (count < 0) {
            increment();
            toast.error('count cannot be lesser then 0 !');
        }
    }, [count]);

    return (
        <>
            <Container>
                <Row>
                    <Col
                        xs={12}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        className='d-flex justify-content-center'
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 100,
                                width: 100,
                                border: '3px solid black',
                                borderRadius: 8,
                            }}
                        >
                            <span style={{ fontSize: 40 }}>{count}</span>
                        </div>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-center'>
                        <Button
                            onClick={increment}
                            style={{
                                margin: 8,
                                backgroundColor: 'green',
                                border: '0px',
                                width: 100,
                                height: 100,
                                fontSize: 80,
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                            className='d-flex align-items-center justify-content-center'
                        >
                            <p>+</p>
                        </Button>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-center'>
                        <Button
                            onClick={decrement}
                            style={{
                                margin: 8,
                                backgroundColor: 'red',
                                border: '0px',
                                width: 100,
                                height: 100,
                                fontSize: 80,
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                            className='d-flex align-items-center justify-content-center'
                        >
                            <p>-</p>
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <span style={{ fontSize: 30 }}>Counter: {count}</span>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </>
    );
}

export default App;
