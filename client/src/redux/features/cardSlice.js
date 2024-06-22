import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNews: [],
  currentId: {},
  searchField: "",
  selectedCatagory: "",
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setAllNews: (state, action) => {
      const newNews = action.payload;
      const updatedNews = state.allNews.filter(
        (news) => !newNews.some((newItem) => newItem.id === news.id)
      );
      state.allNews = [...updatedNews, ...newNews];
      // console.log(state.allNews);
    },
    setCurrentCard: (state, action) => {
      state.currentId = action.payload;
    },
    setSearch: (state, action) => {
      state.searchField = action.payload;
    },
    setSelectedCatagory: (state, action) => {
      state.selectedCatagory = action.payload;
    },
  },
});

export const { setCurrentCard, setSearch, setAllNews, setSelectedCatagory } =
  cardSlice.actions;

export default cardSlice.reducer;
