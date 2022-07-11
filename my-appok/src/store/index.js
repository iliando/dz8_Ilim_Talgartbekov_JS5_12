import {configureStore} from "@reduxjs/toolkit";
import postSliceReducer from "./postSlice"
import usersReducer from "./usersSlice"
import usersListReducer from "./usersListSlice"

export default configureStore({
    reducer: {
        usersReducer,
        usersListReducer,
        postSliceReducer
    }
})