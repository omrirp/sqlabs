import { useState } from 'react';
import './App.css';
import { Container, Heading, Input, Button, HStack } from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';
import Dashboard from './components/dashboard';
import axios from 'axios';
import { Weather } from './interfaces';

function App() {
    const [inputText, setInputText] = useState<string>('');
    const [data, setData] = useState<Weather | undefined>();

    function textInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value);
    }

    async function searchClickhandler() {
        try {
            const response = await axios.get<Weather>(
                `http://api.weatherapi.com/v1/forecast.json?key=7a2ed8bfacc04835a45144307240901&q=${inputText}&days=7&aqi=no&alerts=no`
            );

            //console.log(response.data);

            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='container'>
                <Heading>Weather Website</Heading>
                <HStack>
                    <Input onChange={textInputHandler} type='text' placeholder={'Search here...'} size='lg' />
                    <Button onClick={searchClickhandler}>
                        <GoSearch />
                    </Button>
                </HStack>
                {data ? <Dashboard data={data} /> : <></>}
            </div>
        </>
    );
}

export default App;
