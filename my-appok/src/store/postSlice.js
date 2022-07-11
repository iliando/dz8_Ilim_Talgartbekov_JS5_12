import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    'createUser',
    async function (post, {rejectWithValue}){
        const data = {
            name: "Ilim",
            email: "abq05@mail.ru"
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify(data)
        }
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', options);
            if(response.status === 200) {
                const data = await response.json();
                console.log(data)
                return data
            }else if(response.status === 404) {
                throw Error("не правильный адрес")
            }
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        message: "успешно",
        error: "не правильный адрес"
    },
    extraReducers: builder => {
        builder.addCase(createUser.rejected, (state, action)=> {
            state.message = action.payload
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.error = action.payload
        })
    }
})

export default postSlice.reducer;
