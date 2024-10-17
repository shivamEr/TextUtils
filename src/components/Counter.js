import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count === 0) {
            alert("can not decrease the value");
        }
        else
            setCount(count - 1);
    };
    return (
        <div className='counter pt-5' style={{textAlign:"center"}}>
            <h1 style={{ color:"cyan", textAlign:"center" }}>Counter App</h1>
            <h1 className='text-success'>{count}</h1>
            <button onClick={increment} className='btn btn-primary m-5'>Increment</button>
            <button onClick={decrement} className='btn btn-primary m-5' >Decrement</button>
        </div>
    );
}

export default Counter;
