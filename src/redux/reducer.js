const initialState = {
    images: [],
    loading: false,
    error: null
}

const imageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_IMAGE_START':
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case 'FETCH_IMAGE_SUCCESS':
            return {
                ...state,
                loading: false,
                images: action.payload
            }

        case 'FETCH_IMAGE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state;
    }
}


export default imageReducer;
