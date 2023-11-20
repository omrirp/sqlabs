import { useState } from 'react';
import './App.css';
import { Container, Row, Col, Button, Spinner, Card, CloseButton } from 'react-bootstrap';
import axios from 'axios';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        setIsLoading(true);
        const response = await axios.get('https://api.pokemontcg.io/v2/cards');
        if (response.status === 200 && response.data.data.length > 0) {
            setIsLoading(false);
            setPokemons(response.data.data);
        } else {
            setIsLoading(false);
            console.log('err');
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ color: '#3a5ca4', fontSize: 50 }}>POKEMONS</h1>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <Button
                                onClick={fetchPokemons}
                                style={{ backgroundColor: '#3a5ca4', border: '4px solid #ffe659', color: '#ffe659' }}
                            >
                                Fetch Them All!
                            </Button>
                        )}
                    </Col>
                </Row>
                <br />
                <Row>
                    {pokemons.length > 0 &&
                        pokemons.map((pokemon) => {
                            return (
                                <Col key={pokemon.id} xs={12} md={6} lg={4} className='d-flex justify-content-center'>
                                    <Card
                                        style={{
                                            width: '100%',
                                            margin: 6,
                                            border: '3px solid #3a5ca4',
                                            backgroundColor: '#fffde7',
                                        }}
                                    >
                                        <Card.Title style={{ color: '#3a5ca4' }}>{pokemon.name}</Card.Title>
                                        <Card.Body>
                                            <Card.Img variant='top' src={pokemon.images.large} />
                                            <Card.Text></Card.Text>
                                            {/* <Button variant='primary'>Go somewhere</Button> */}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </>
    );
}

export default App;
