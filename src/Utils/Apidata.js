import { createSlice } from "@reduxjs/toolkit";
const Apidata = createSlice({
  name: "Apidata",
  initialState: {
    page: 1,
  },
  reducers: {
    Nextpg: (state) => {
      state.page += 1;
    },
    Prevpg: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },
});
export const { Nextpg, Prevpg } = Apidata.actions;
export default Apidata.reducer;
