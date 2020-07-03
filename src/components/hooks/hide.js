import React, { useState } from 'react';

export default function hidden() {
    const [visible, updateVisibility] = useState(true)

    if (visible) {
      return (
        <div>
          
          <button onClick={() => updateVisibility(false)}>Hide</button>
          <h1>Hide me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => updateVisibility(true)}>Show</button>
        </div>
            );
        }
    }