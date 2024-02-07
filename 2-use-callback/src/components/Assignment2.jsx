import React, { useState, useCallback } from 'react';

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of 
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

export function Assignment2() {
    const [inputText, setInputText] = useState('');

    // Your code starts here
    const showAlert= useCallback(()=>{
        alert(inputText);


    },[inputText]); 
    // Your code ends here
    // Memoizing showAlert Function:

// The showAlert function is defined using useCallback hook.
// Inside useCallback, the function logic is specified to display an alert with the entered text. It uses the alert function, which displays a browser alert dialog.
// The dependency array [inputText] ensures that the showAlert function is re-created only if the inputText state changes. This is necessary because showAlert references inputText inside its closure.
// Input Field and Button:

// The text input field allows users to enter text, and its value is controlled by the inputText state variable.
// When the button labeled "Show Alert" is clicked, it triggers the showAlert function, which displays an alert with the text entered in the input field.

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter some text"
            />
            <Alert showAlert={showAlert} />
        </div>
    );
};

function Alert({showAlert}) {
    return <button onClick={showAlert}>Show Alert</button>
}

