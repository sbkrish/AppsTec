
//fetchimagesStart, imageSuccess, imageFailure

import axios from "axios";

export const fetchImagesStart = () => ({
    type: 'FETCH_IMAGE_START',
})

export const imageSuccess = (images) => ({
    type: 'FETCH_IMAGE_SUCCESS',
    payload: images
});

export const imageFailure = (error) => ({
    type: 'FETCH_IMAGE_FAILURE',
    payload: error
})



export const fetchImages = () => {
    return (dispatch) => {
        dispatch(fetchImagesStart());

        axios
        .get('https://api.unsplash.com/photos/random?count=10&client_id=ro48CsbY7wPrt2fDyPYq5STN0foSRGcYUAGjVmCjW_Y')
        .then((res) => {
            dispatch(imageSuccess(res.data));
        })
        .catch((error) => {
            dispatch(imageFailure(error.message));
        });

    }
}
