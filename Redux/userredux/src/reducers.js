import { FETCH_USER_SUCCESS } from './actions';

const initialState = {
    users: [],
    toggleLiked: false,
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        // case "LIKE_PERSON":
        //     const toggle = state.toggleLiked;
        //     return {
        //         ...state,
        //         toggleLiked: !toggle
        //     }
        case "DELETE_PERSON":
            const newlist = [...state.users];
            newlist.splice(action.index, 1);
            return {
                ...state,
                users: newlist
            }
        case "EDIT_PERSON":
            const newlist2 = [...state.users];
            newlist2[action.payload.index].name = action.payload.values.name;
            newlist2[action.payload.index].email = action.payload.values.email;
            newlist2[action.payload.index].phone = action.payload.values.phone;
            newlist2[action.payload.index].website = action.payload.values.website;
            return {
                ...state,
                users: newlist2
            }
        default:
            return state;
    }
}

export default rootReducer;
