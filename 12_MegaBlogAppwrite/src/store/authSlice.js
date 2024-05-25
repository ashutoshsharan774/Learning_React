import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,//by default false since user is not authenticated now
    userData:null//since no user authenticated therefore userData=null
}




//this is to track usser authentication whether user is authenticated or not we will ask this from store
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        //Methods/Actions that can be dipsatched/export
        login: (state,action)=>{
            state.status=true,
            state.userData=action.payload.userData;
        },
        logout: (state)=>{
            state.status=false;
            state.userData=null;
        }
    }

})
//we have export each reducers individually
export const{login,logout} =authSlice.actions;
export default authSlice.reducer;