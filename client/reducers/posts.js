// a reducer to change post state

function posts(state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES' :
        // return the updated state
        const i = action.index;
            return[
                ...state.slice(0, i), // before the one we update
                {...state[i], likes: state[i].likes + 1}, // object spread
                ...state.slice(i + 1),
            ];
        default:
            return state;
    }
}

export default posts;