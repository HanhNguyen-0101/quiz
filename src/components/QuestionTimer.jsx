import React, { useEffect, useState } from 'react';

function QuestionTimer({timeout, onTimeout}) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer)
        };

    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(remainingTime => remainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval)
        };

    }, [remainingTime]);

    return (
        <progress id='question-time' value={remainingTime} max={timeout} />
    );
}

export default QuestionTimer;