const {createSlice} = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'user',
  initialState: {
    list: [],
    userCurrent: {},
  },
  reducers: {
    userCreatePending: (state, action) => {
      state.loading = true;
    },
    userCreateSuccess: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.userInfo = action.payload;
    },
    userCreateError: (state, action) => {
      state.loading = false;
      state.isLogin = false;
      state.userInfo = {};
    },
  },
});

const userReducer = slice.reducer;
export const {
  userCreatePending,
  userCreateSuccess,
  userCreateError,
} = slice.actions;
export default userReducer;
