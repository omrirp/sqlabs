import axios from 'axios';
import { Question } from './interfaces';

export async function fetchData(uri: string): Promise<Question[]> {
    const result = await axios.get(uri);
    return result.data.results;
}

export function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
