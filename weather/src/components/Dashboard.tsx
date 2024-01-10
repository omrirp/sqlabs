import { Weather } from '../interfaces';
import { Box, Heading, HStack, VStack, Image, SimpleGrid, GridItem, Flex } from '@chakra-ui/react';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';

interface Props {
    data: Weather;
}

export default function Dashboard({ data }: Props) {
    return (
        <Flex marginTop={8} borderWidth={1} borderRadius={8} padding={3} direction='column'>
            <HStack justifyContent={'space-between'}>
                <VStack>
                    <Heading size='md'>{data.location.name}</Heading>
                    <Heading size='sm'>{data.location.country}</Heading>
                </VStack>
                <VStack>
                    <Heading>{data.forecast.forecastday[0].day.avgtemp_c}°</Heading>
                    <Heading size='sm'>Chance of rain: {data.forecast.forecastday[0].day.daily_chance_of_rain}%</Heading>
                    <Heading size='sm'>{data.forecast.forecastday[0].day.condition.text}</Heading>
                </VStack>
                <Image src={data.current.condition.icon} htmlWidth={250} alt='' />
            </HStack>

            <Heading size='md' marginTop={4} marginBottom={4}>
                Hourly forecast
            </Heading>
            <SimpleGrid columns={{ lg: 8, md: 4, sm: 2 }}>
                {data.forecast.forecastday[0].hour.map((h, index) => {
                    if (index % 3 == 0) {
                        return (
                            <GridItem key={index}>
                                <HourlyWeather hour={h} />
                            </GridItem>
                        );
                    }
                })}
            </SimpleGrid>
            <Heading size='md' marginTop={4} marginBottom={4}>
                Daily forecast
            </Heading>
            <SimpleGrid columns={{ lg: 6, md: 3, sm: 2 }}>
                {data.forecast.forecastday.map((d, index) => {
                    if (index != 0) {
                        return (
                            <GridItem key={index}>
                                <DailyWeather day={d} />
                            </GridItem>
                        );
                    }
                })}
            </SimpleGrid>
        </Flex>
    );
}
