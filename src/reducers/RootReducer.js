const initState = {
    posts: []
}

const RootReducer = (state=initState, action) => {
    if (action.type === '') {
        return {
            ...state,
            posts: [...action.post]
        }
    }
}

export default RootReducer