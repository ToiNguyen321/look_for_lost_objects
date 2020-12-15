const {createSlice} = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    pending: false,
    userInfo: {},
  },
  reducers: {
    loginPending: (state, action) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.isLogin = true;
      state.userInfo = action.payload;
    },
    loginError: (state, action) => {
      state.pending = false;
      state.isLogin = false;
      state.userInfo = {};
    },
    registerPending: (state, action) => {
      state.pending = true;
    },
    registerSuccess: (state, action) => {
      state.pending = false;
      // state.isLogin = true;
      // state.userInfo = action.payload;
    },
    registerError: (state, action) => {
      state.pending = false;
      // state.isLogin = false;
      // state.userInfo = {};
    },
  },
});

const authReducer = slice.reducer;
export const {
  loginPending,
  loginSuccess,
  loginError,
  registerPending,
  registerSuccess,
  registerError,
} = slice.actions;
export default authReducer;
