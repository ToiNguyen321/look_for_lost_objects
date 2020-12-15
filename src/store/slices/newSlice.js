const {createSlice} = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'new',
  initialState: {
    list: [],
    pending: false,
  },
  reducers: {
    newsPending: (state, action) => {
      state.pending = true;
    },
    newsSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    newsError: (state, action) => {
      state.pending = false;
    },
  },
});

const newReducer = slice.reducer;
export const {newsPending, newsSuccess, newsError} = slice.actions;
export default newReducer;
