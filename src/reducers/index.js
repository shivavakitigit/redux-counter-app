import { combineReducers } from "redux";
import { initialState } from "../initialState";
import { ADD_COUNTER, MIN_COUNTER, RESET_COUNTER } from "../actionTypes";

const globalState = {
  counter: 0,
  name: "keerthi",
  usersList: [
    {
      name: "keethi",
      location: "Bangalore",
    },
    {
      name: "Sushanth",
      location: "Hyderbad",
    },
    {
      name: "Shiva",
      location: "Hyderabad",
    },
  ],
};

// const [state, setState] = useState(0)

export function data(state = globalState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        counter: state.counter + "ADDED ONE VALUE",
      };

    case MIN_COUNTER:
      return {
        counter: state.counter - 1,
      };
    case RESET_COUNTER:
      return { counter: 100 };
    case "HI_SUSNTH":
      return {
        counter: state.counter + 100,
      };

    default:
      return state;
  }

  // return state;
}




const rootReducer = combineReducers({ data });

export default rootReducer;
