import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../store/postSlice";

function PostPage(props) {
    const dispatch = useDispatch()

    const error = useSelector(state => state.usersListReducer.error)
    const message = useSelector(state => state.postSliceReducer.message)

    useEffect(() => {
        dispatch(createUser())
    }, [])
    return (
        <div>
            <h1>{error}</h1>
            <h1>{message}</h1>
            Post
        </div>
    );
}

export default PostPage;