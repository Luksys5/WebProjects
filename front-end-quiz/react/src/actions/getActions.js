import { GET_BROWSE_ITEMS, GET_VIEW_ITEM } from "./types";

export const getBrowseItems = (start = 0, limit = 9) => dispatch => {
    fetch(`http://localhost:3001/browse?start=${0}&limit=${9}`)
        .then(response => response.json())
        .then(
            data => dispatch(getBrowseItemsResult(data)),
            error => dispatch(getBrowseItemsResult(error))
        );
}

export const getViewItem = (id) => dispatch => {
    fetch(`http://localhost:3001/item/${id}`)
        .then(response => response.json())
        .then(
            data => dispatch(getViewItemResult(data)),
            error => dispatch(getViewItemResult(error))
        )
}

export const getBrowseItemsResult = (data) => {
    return {
        type: GET_BROWSE_ITEMS,
        payload: data
    }
}

export const getViewItemResult = (data) => {
    return {
        type: GET_VIEW_ITEM,
        payload: data
    }
}