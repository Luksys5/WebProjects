import { GET_BROWSE_ITEMS, GET_VIEW_ITEM } from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BROWSE_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case GET_VIEW_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}