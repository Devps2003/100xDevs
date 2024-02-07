import { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(()=>{
        count = count +1;
        setCount(count);
    },[]); 
    // Preventing Function Recreation: Without useCallback, every time the Assignment1 component renders, handleIncrement and handleDecrement would be recreated as new function instances. This is because they are defined within the component function body. When React re-renders the component, it would consider these functions as new references, potentially leading to unnecessary re-renders of child components that receive them as props.

    // Optimizing Child Components: In this case, the CounterButtons component receives onIncrement and onDecrement as props. If these functions were recreated on every render of Assignment1, CounterButtons would re-render unnecessarily each time, even if the count state didn't change. By memoizing these functions with useCallback, React ensures that the same function references are provided as props, unless their dependencies (specified in the dependency array of useCallback) change.
    
    // Stable Function References: useCallback memoizes the functions based on their dependencies. In this case, since the functions don't have any dependencies (empty dependency arrays [] are provided), they will only be created once during the initial render. This means that onIncrement and onDecrement will have stable references, and React won't re-create them unless the component's dependencies change.
    const handleDecrement = useCallback(()=>{
        count = count -1;
        setCount(count);
    },[]) 
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
