import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../Redux/actions";
import { connect } from "react-redux";
function Counter() {
    const counter = useSelector((state) => state.counter);
    console.log(counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <h3>Counter : {counter}</h3>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}
// without hooks
// const mapSateToProps =(state)=>{
//     return {
//         counter:state.counter
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         increment : ()=>dispatch(increment()),
//         decrement: ()=>dispatch(decrement())
//     }
// }

// export default connect(mapSateToProps,mapDispatchToProps)(counter)

export default Counter;
