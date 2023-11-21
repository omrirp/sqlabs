import { Card, Button, Image } from 'react-bootstrap';
import typeColors from './typeColors';

export default function PokemonCard({ pokemon }) {
    return (
        <Card
            style={{
                width: '100%',
                margin: 6,
                border: '3px solid #3a5ca4',
                backgroundColor: '#fafafa',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Image src={pokemon.set.images.symbol} style={{ width: 30, marginRight: 8 }} />
                <Card.Title style={{ color: '#3a5ca4', fontWeight: 'bold', fontSize: 25 }}>{pokemon.name}</Card.Title>
            </div>
            <Card.Body>
                <Card.Img variant='top' src={pokemon.images.large} />

                <div>
                    <h5>
                        Types:{' '}
                        {pokemon.types.map((type) => {
                            return <span style={{ color: typeColors[type] }}>{type} </span>;
                        })}
                    </h5>
                </div>
                {/* <Card.Text>{pokemon.tcgplayer.url}</Card.Text> */}

                {pokemon.tcgplayer != undefined ? (
                    <Button
                        href={pokemon.tcgplayer.url}
                        style={{
                            marginTop: 6,
                            backgroundColor: '#3a5ca4',
                            border: '4px solid #ffe659',
                            color: '#ffe659',
                        }}
                    >
                        Purchase
                    </Button>
                ) : (
                    ''
                )}
            </Card.Body>
        </Card>
    );
}
