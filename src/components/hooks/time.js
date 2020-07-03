import React, { useState, useEffect } from 'react';
import Moment from 'moment';

export default function time() {
    const [currentTime, updateTime] = useState(Moment().format('LTS'))

    useEffect(() => {
        const newTime = 
            setInterval(() => {
                updateTime(Moment().format('LTS'))
        }, 1000)

        return function cleanup() {
            clearInterval(newTime);
        }
    }, [])

    return (
        <div>
            <h2>{currentTime}</h2>
        </div>
    );
}