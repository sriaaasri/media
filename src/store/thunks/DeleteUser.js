import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteRecord = createAsyncThunk("users/delete" , async(user)=>{
    //await axios.delete(`http://localhost:3005/photos/${user.id}`)
     await axios.delete(`http://localhost:3005/users/${user.id}`);
    
    return user;
})

export {deleteRecord};
