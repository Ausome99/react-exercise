import React, { useState } from 'react';

export default function changeNumber() {
    const [number, updateNumber] = useState(0)

    return (
        <div>
            <button onClick={() => updateNumber(number + 1)}>+</button>
            <h3>{number}</h3>
            <button onClick={() => updateNumber(number - 1)}>-</button>
            
        </div>
    )
}
