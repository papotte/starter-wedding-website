'use client';

import React from 'react';

import { useCountdown } from '@hooks/useCountdown';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>This event has ended!!!</span>
            <p>I hope you had fun!</p>
        </div>
    );
};

type DateTimeProps = {
    value: number;
    type: string;
};

const DateTimeDisplay = ({ value, type }: DateTimeProps) => {
    return (
        <div className="flex flex-col bg-accent-900 w-16 h-16 md:w-20 md:h-20 rounded-full justify-center animate-beat text-center text-white/75">
            <h6 className="text-2xl md:text-3xl">{value}</h6>
            <h6>{type}</h6>
        </div>
    );
};

type CounterProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
const ShowCounter = ({ days, hours, minutes, seconds }: CounterProps) => {
    return (
        <div className="justify-center flex row gap-x-4">
            <DateTimeDisplay value={days} type={'Days'} />
            <DateTimeDisplay value={hours} type={'Hours'} />
            <DateTimeDisplay value={minutes} type={'Mins'} />
            <DateTimeDisplay value={seconds} type={'Seconds'} />
        </div>
    );
};

type Props = {
    targetDate: string;
};

const CountdownTimer = ({ targetDate }: Props) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
    }
};
export default CountdownTimer;
