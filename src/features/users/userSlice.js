import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../axios";



const loginUser = createAsyncThunk(
  "user/login", async (payload) => {
    const response = await axiosInstance.post('/auth/token/', payload); 
    const userData = {...response.data};
    const id = userData.user.id;
    const token = userData.access;
    const userName = userData.user.username;
    const userState = {id, token, userName};
    // localStorage.setItem("user", JSON.stringify(userState))
     axiosInstance.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  }; 
    return userState;
  
  } 
) 

const initialState = {
    id:"",
    token:"",
    userName:"",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
    deleteUser: state => {
      state.id = "";
      state.token = "";
      state.userName = "";
    }
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.id = action.payload.id
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
  }
})

const setUser = userSlice.actions.setUser;
const deleteUser = userSlice.actions.deleteUser;
const reducer = userSlice.reducer;

export {loginUser, setUser, deleteUser, reducer}