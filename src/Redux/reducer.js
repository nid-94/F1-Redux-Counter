// impoortation
import { DECREMENT, INCREMENT } from "./actionsType";

//  initialestate
const initialeState = {
    counter: 0, //default State Vlaue
};

// pure Function
const counterReducer = (state = initialeState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter > 0 ? state.counter - 1 : state.counter,
            };

        default:
            return state;
    }
};

export default counterReducer;
