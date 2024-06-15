import { createSlice, configureStore } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    data: undefined,
    isError: undefined,
  },
  reducers: {
    updateState(state, actions) {
      state.data = actions.payload;
    },
    setIsError(state, actions) {
      state.isError = actions.payload;
      // console.log("Updated Error state");
    },
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: { darkTheme: false },
  reducers: {
    setDarkTheme(state) {
      state.darkTheme = true;
    },
    setLightTheme(state) {
      state.darkTheme = false;
    },
  },
});

const fontSlice = createSlice({
  name: "font",
  initialState: { font: "sans" },
  reducers: {
    changeFont(state, actions) {
      // console.log(1);
      state.font = actions.payload;
      // console.log(2);
    },
  },
});

export const themeActions = themeSlice.actions;
export const dataActions = dataSlice.actions;
export const fontActions = fontSlice.actions;
export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    theme: themeSlice.reducer,
    font: fontSlice.reducer,
  },
});

//Fetching data from the API
export function fetcher(word) {
  return async (dispatch) => {
    async function fetchFunc() {
      const response = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`Couldn't fetch data!`);
      }
      dispatch(dataActions.updateState(data));
      dispatch(dataActions.setIsError(false));
    }
    try {
      await fetchFunc();
    } catch (error) {
      console.log(error);
      dispatch(dataActions.setIsError(true));
    }
  };
}
