const {createSlice} = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        todos: action.payload,
      };
    },
  },
});

const featureReducer = slice.reducer;
export const {fetchData} = slice.actions;
export default featureReducer;
