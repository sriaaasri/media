import {createSlice} from "@reduxjs/toolkit"
import { fetchUsers } from "../thunks/fetchUsers"
import { addUser } from "../thunks/AddUsers";
import { deleteRecord } from "../thunks/DeleteUser";

const usersSlice = createSlice({
    name:"users",
    initialState:{
        isLoading:false,
        data:[],
        error:null
    },
   
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchUsers.fulfilled , (state,action)=>{
                state.isLoading=false;
                state.data= action.payload;
                
        });
        builder.addCase(fetchUsers.rejected ,(state, action )=>{
            state.isLoading=false;
            state.error=action.error;
        });

        builder.addCase(addUser.pending , (state, action)=>{
            state.isLoading=true;
           
        })
        builder.addCase(addUser.fulfilled , (state,action)=>{
            state.isLoading=false;
            state.data.push(action.payload);
        })
        builder.addCase(addUser.rejected ,(state,action)=>{
                state.isLoading=false;
                state.error = action.error;

        })

        builder.addCase(deleteRecord.pending , (state, action)=>{
            state.isLoading=true;
        })
        builder.addCase(deleteRecord.fulfilled , (state, action)=>{
            state.isLoading = false;
            const updated = state.data.filter((user)=>user.id!==action.payload.id);
            // return { ...state , data:updated};
            state.data=updated;
            
            
        })
        builder.addCase(deleteRecord.rejected ,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
        })

        

        
    }

})

export {usersSlice}