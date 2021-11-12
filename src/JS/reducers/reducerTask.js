import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../constants/actionTypes";


const intialState = {
    list: []
}



const reducerTask = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, list: [...state.list, action.payload] }

        case DELETE_TASK:
            return { ...state, list: state.list.filter(el => el.id !== action.payload) }

        case COMPLETE_TASK:
            return { ...state, list: state.list.map(el => el.id === action.payload ? { ...el, state: !el.state } : el) }
        
            case EDIT_TASK:
            return { ...state, list: state.list.map(el => el.id === action.payload.id ? { ...el, text: action.payload.text } : el) }

        default:
            return state;
    }
}

export default reducerTask