import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchData = createAsyncThunk('user/fetchData',async()=>{
    const response = await axios.get('http://localhost:3000/user')
    return response.data
})

export const DeleteData = createAsyncThunk('user/deleteData',async(id)=>{
    const response = await axios.delete(`http://localhost:3000/user/${id}`)
    return response.data
})

export const AddData = createAsyncThunk('user/AddData',async(user)=>{
    const response = await axios.post(`http://localhost:3000/user`,user)
    return response.data
})

export const EditData = createAsyncThunk('user/AddData',async(user,id)=>{
    const response = await axios.put(`http://localhost:3000/user/${id}`,user)
    return response.data
})


const userSlice = createSlice({
    name:'user',
    initialState:{user:[]},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.fulfilled,(state,action)=>{
             state.user = action.payload
        })
        .addCase(DeleteData.fulfilled,(state,action)=>{
            state.user = state.user.filter((item)=>item.id !== action.payload.id)
        })
        .addCase(AddData.fulfilled,(state,action)=>{
            state.user = action.payload
        })
    }
})

export default userSlice.reducer