export interface Weather {
    location: {
        name: string;
        country: string;
    };
    current: {
        last_updated: string;
        condition: {
            text: string;
            icon: string;
        };
    };
    forecast: {
        forecastday: Forecastday[];
    };
}

export interface Forecastday {
    date: string;
    day: {
        avgtemp_c: number;
        daily_chance_of_rain: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    hour: Hour[];
}

export interface Hour {
    time: string;
    temp_c: number;
    condition: {
        text: string;
        icon: string;
    };
}

export enum DayOfWeek {
    Sun = 0,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
}
