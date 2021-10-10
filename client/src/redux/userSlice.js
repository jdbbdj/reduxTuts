import { createAsyncThunk,createSlice} from '@reduxjs/toolkit';

import axios from "axios";


export const updateUserx = createAsyncThunk("users/update", async (user) => {
    const response = await axios.post(
      "http://localhost:8800/api/users/1/update",
      user
    );
    return response.data;
  });

export const userSlice = createSlice({
    name:"user",
    initialState:{
        userInfo:{
            name:"anna",
            email:"john@gmail.com"
        },
        pending:null,
        error:null
    },
    reducers:{
        /* update:(state,action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
         remove:(state) =>
            (state = {})
        ,
        addHello:(state,action)=>{
            state.name = "hello " + action.payload.name;
        }
    },  */
        /* updateStart:(state)=>{
            state.pending = true;
        },
        updateSuccess:(state,action)=>{
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError:(state) =>{
            state.error = true;
            state.pending = false;
        } */
    },
    extraReducers:{
        [updateUserx.pending]:(state)=>{
            state.pending = true;
            state.error = false;
        },
        [updateUserx.fulfilled]:(state,action)=>{
            state.userInfo = action.payload;
            state.pending = null;
            
        },
        [updateUserx.rejected]:(state)=>{
            state.pending = null;
            state.error = true;
        },
    }
})


export const {updateStart, updateSuccess, updateError} = userSlice.actions;
export default userSlice.reducer;