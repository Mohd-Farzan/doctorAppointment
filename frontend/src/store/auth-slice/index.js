import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState={
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
    isLoading:true,
    user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
}
export const SignupUser=createAsyncThunk('auth/signup',
    async(FormData)=>{
        try {
            const response=await axios.post('http://localhost:3000/api/auth/signup',FormData,{
                withCredentials:true
            });
            if(response.data.success){
                localStorage.setItem('token',response.data.token);//store the token
            }
            return response.data
        } catch (error) {
            console.log(error).json({
                success:false,
                message:'incorrect username or password'
            })

            
        }
    }
);
export const checkRoute= createAsyncThunk(
    'auth/checkroute',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token'); // Fetch the token from localStorage
            const response = await axios.get('http://localhost:3000/api/auth/checkroute', {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                   
                },
            });
            return response.data;
        } catch (error) {
            const message = error.response && error.response.data ? error.response.data : 'An error occurred';
            return rejectWithValue(message);
        }
    }
);
export const loginUser=createAsyncThunk('auth/login',
    async(FormData)=>{
        try {
            const response=await axios.post('http://localhost:3000/api/auth/login',FormData,{
                withCredentials:true
            });
            if(response.data.success){
                localStorage.setItem('token',response.data.token);
            }
            return response.data
        } catch (error) {
            console.log(error).json({
                success:false,
                message:'invalid credentials'
            })
        }
    }
)
//auth slice
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
            localStorage.setItem('isAuthenticated', 'true'); // Persist to localStorage
            localStorage.setItem('user', JSON.stringify(action.payload)); // Persist user data
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(SignupUser.pending, (state) => {
                state.isLoading = true; // Set isLoading to true when the request is pending
                state.error = null; // Clear any previous errors
            })
            .addCase(SignupUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null; // Clear any previous errors
            })
            .addCase(SignupUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload; // Directly set the error message
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true; // Set isLoading to true when the request is pending
                state.error = null; // Clear any previous errors
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null; // Clear any previous errors
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload; // Directly set the error message
            })
            .addCase(checkRoute.pending, (state) => {
                state.isLoading = true;
                state.error = null; // Clear any previous errors
            })
            .addCase(checkRoute.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user=action.payload.success?action.payload.user:null;
                state.isAuthenticated=action.payload.success?true : false;
            })
            .addCase(checkRoute.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload; // Directly set the error message
        })
    }
});

export const {setUser}=authSlice.actions;
export default authSlice.reducer
