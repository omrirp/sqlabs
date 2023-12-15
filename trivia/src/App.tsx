import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// type BodyElementObject = {
//     button: React.ReactElement;
//     spinner: React.ReactElement;
//     triviaContainer: React.ReactElement;
// };

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/gameScreen' element={<GameScreen />} />
            <Route path='/gameOverScreen' element={<GameOverScreen />} />
        </Routes>
    );
}

export default App;
