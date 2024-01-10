import { Forecastday, DayOfWeek } from '../interfaces';
import { Box, Heading, Image } from '@chakra-ui/react';

interface Props {
    day: Forecastday;
}

export default function DailyWeather({ day }: Props) {
    const date: Date = new Date(day.date);
    const dayString: string = DayOfWeek[date.getDay()];

    return (
        <Box margin={2} borderBottomWidth={1} borderRadius={4}>
            <Heading size='sm'>{dayString}</Heading>
            <div className='hourImgContainer'>
                <Image src={day.day.condition.icon} htmlWidth={60} />
            </div>
            <Heading size='sm'>{day.day.avgtemp_c}°</Heading>
        </Box>
    );
}
