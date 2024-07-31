import {createSlice} from "@reduxjs/toolkit"
import { User } from "../types/global"

type IntialStateType = {
    users: User[],
}

const initialState: IntialStateType = {
    users: [],
}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser:(state,action)=>{
            state.users = [...state.users,action.payload];
        },
        deleteUser:(state,action)=>{
            state.users = state.users.filter((_,index)=> index !== action.payload)
        }
    }
})


export const {setUser,deleteUser} = userSlice.actions;

export default userSlice.reducer;
