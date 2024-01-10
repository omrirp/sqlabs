import { Box, Heading, Image } from '@chakra-ui/react';
import { Hour } from '../interfaces';

interface Props {
    hour: Hour;
}

export default function HourlyWeather({ hour }: Props) {
    const date = new Date(hour.time);
    const hourNum: number = date.getHours();
    const hourText: string = hourNum > 10 ? hourNum.toString() : '0' + hourNum.toString();
    const minutesNum: number = date.getMinutes();
    const minutesText: string = minutesNum > 10 ? minutesNum.toString() : '0' + minutesNum.toString();

    return (
        <Box margin={2} borderBottomWidth={1} borderRadius={4}>
            <Heading size='xs' marginTop={2}>
                {`${hourText}:${minutesText}`}
            </Heading>
            <div className='hourImgContainer'>
                <Image src={hour.condition.icon} htmlWidth={100} />
            </div>
            <Heading size='md' marginBlock={2}>
                {hour.temp_c}°
            </Heading>
        </Box>
    );
}
