import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [count, setcount] = useState(0);
    const numrender = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setcount(count+1);
    };
    numrender.current=numrender.current+1;
    // We're using useRef to create a special storage space (like a box) called numberOfTimesReRendered. This box can hold a value that persists even when the component re-renders (updates). This means the value inside the box won't change or reset when the component refreshes. We can easily put things in this box (like numbers) and take them out whenever we need without causing the component to re-render. It's like having a secret locker where we can store and retrieve things without anyone else noticing.

    return (
        <div>
            <p>This component has rendered {numrender} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};