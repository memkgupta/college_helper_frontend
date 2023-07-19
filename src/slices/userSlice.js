import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({name:'user',initialState:{user:{},status:'Loading'},reducers:{
    loadUser(state,action){
state.user = action.payload;
    },
    setStatus(state,action){
state.status = action.payload;
    }
}});

export const {loadUser,setStatus} = userSlice.actions;

export default userSlice.reducer;