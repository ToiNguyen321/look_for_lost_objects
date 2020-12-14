const {createSlice} = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    loading: false,
    userInfo: {},
  },
  reducers: {
    loginPending: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.userInfo = action.payload;
    },
    loginError: (state, action) => {
      state.loading = false;
      state.isLogin = false;
      state.userInfo = {};
    },
  },
});

const authReducer = slice.reducer;
export const {loginPending, loginSuccess, loginError} = slice.actions;
export default authReducer;
