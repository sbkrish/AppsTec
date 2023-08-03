import { configureStore } from "@reduxjs/toolkit";
// import { ThunkMiddleware } from "redux-thunk";
import imageReducer from "./reducer";


const store = configureStore({
    reducer: imageReducer,
    middleware: [ThunkMiddleware]
}
)

export default store;