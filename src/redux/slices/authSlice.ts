import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  user: any;
}

// const initialState: AuthState = {
//   accessToken: localStorage.getItem("accessToken") || "",
//   user: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user") || "")
//     : null,
// };

const authSlice = createSlice({
  name: "auth",
  initialState: "",
  reducers: {
    // login: (state, action) => {
    //   state.accessToken = action.payload.access_token;
    //   state.user = action.payload.user;
    //   localStorage.setItem("accessToken", action.payload.access_token);
    //   localStorage.setItem("user", JSON.stringify(action.payload.user));
    // },
    // logout: (state) => {
    //   state.accessToken = "";
    //   state.user = null;
    //   localStorage.removeItem("accessToken");
    //   localStorage.removeItem("user");
    // },
  },
});

// export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
