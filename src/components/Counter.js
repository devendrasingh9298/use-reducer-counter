import { useReducer, useState } from "react";
import '../App.css';
// function reducer(state, action){
//     return { count : state.count + 1};
// }

const ACTION_TYPES = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

function reducer(state, action){
    // eslint-disable-next-line default-case
    switch(action.type){
        // case 'increment':
        //     return { count : state.count + 1};

        // case 'decrement':
        //     // return { count : state.count - 1};
        //     let newCount = state.count -1;
        //     if(newCount <= 0) return { count: 0};
        //     else return {count: newCount};

        //case default:
            //return state;

        case ACTION_TYPES.INCREMENT:
            return { count : state.count + 1};

        case ACTION_TYPES.DECREMENT:
            // return { count : state.count - 1};
            let newCount = state.count -1;
            if(newCount <= 0) return { count: 0};
            else return {count: newCount};
    };
};

function Counter(){

    // const [count, setCount] = useState(0);

    //Reducer Hook
        const [state, dispatch] = useReducer(reducer, {count: 0});

        const increment = () => {
            dispatch({type: 'increment'});
        }

        const decrement = () => {
            dispatch({type: 'decrement'});
        }

        // const increment = () => {
        //     dispatch();
        // }

        // const decrement = () => {
        //     dispatch();
        // }

        return(
            <div className="parent">
                <button onClick={decrement}>-</button>
                <span>{state.count}</span>
                <button onClick={increment}>+</button>
            </div>
        );

    // return(
    //     <div>
    //         <button onClick={() => setCount(count-1)}>-</button>
    //         <span>{count}</span>
    //         <button onClick={() => setCount(count+1)}>+</button>
    //     </div>
    // );
};

export default Counter;