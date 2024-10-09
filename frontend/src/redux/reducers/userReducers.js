import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: [],
    loading: false,
    error: null,
    success: false,
    message: null,
    userUpdate: null,
    userDelete: null,
    userCreate: null,
    userLogin: null,
    userLogout: null,
    userRegister: null,
    userForgotPassword: null,
    userResetPassword: null,
    userUpdateProfile: null,
    userUpdatePassword: null,
    userVerifyEmail: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginRequest: (state, action) => {
            state.loading = true
            state.userLogin = null
        }
    }
})

export const { userLoginRequest } = userSlice.actions

export default userSlice.reducer