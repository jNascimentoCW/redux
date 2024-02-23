// import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    //Hook to get the latest data
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10));
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>increment</button>
                <button onClick={increaseHandler}>increment by 10</button>
                <button onClick={decrementHandler}>decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

// Not using redux toolkit
// const Counter = () => {
//     const dispatch = useDispatch();
//     //Hook to get the latest data
//     const counter = useSelector((state) => state.counter);
//     const show = useSelector((state) => state.showCounter);

//     const incrementHandler = () => {
//         dispatch({ type: "increment" });
//     };

//     const increaseHandler = () => {
//         dispatch({ type: "increase", amount: 10 });
//     };

//     const decrementHandler = () => {
//         dispatch({ type: "decrement" });
//     };

//     const toggleCounterHandler = () => {
//         dispatch({ type: "toggle" });
//     };

//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             {show && <div className={classes.value}>{counter}</div>}
//             <div>
//                 <button onClick={incrementHandler}>increment</button>
//                 <button onClick={increaseHandler}>increment by 10</button>
//                 <button onClick={decrementHandler}>decrement</button>
//             </div>
//             <button onClick={toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     );
// };

export default Counter;

// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler() {
//         this.props.decrement();
//     }

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>
//                         increment
//                     </button>
//                     <button onClick={this.decrementHandler.bind(this)}>
//                         decrement
//                     </button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// //For using class based components
// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({ type: "increment" }),
//         decrement: () => dispatch({ type: "decrement" }),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
