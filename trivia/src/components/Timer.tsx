import { useEffect, useState } from 'react';

interface timerProps {
    time: number;
    setIsTimeUP: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Timer({ time, setIsTimeUP }: timerProps) {
    const [seconds, setSeconds] = useState<number>(time);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        // Check if time is up
        if (seconds <= 0) {
            clearInterval(intervalId); // Clear the interval
            setIsTimeUP(true); // Set the state to true when time is up
        }

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [seconds, setIsTimeUP, time]);

    return (
        <div className='flex' id='timerContainer'>
            <p id='timerText'>TIME: {seconds}</p>
        </div>
    );
}
