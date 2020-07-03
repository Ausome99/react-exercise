import React, { useState } from 'react';

export default function fontChange() {
    const [font, updateFont] = useState(30);

    return (
        <div >
            <button onClick={() => updateFont(font + 10)}>Font Size Up</button>
            <button onClick={() => updateFont(font - 10)}>Font Size Down</button>
            <h3 style={{ fontSize: `${font}px` }}>{`${font}px`}</h3>
        </div>
    )
}
