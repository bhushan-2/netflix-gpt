import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    trailerVideo: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    watchMovieDetails: null,
    watchVideo: null,
    isInfoOpen: false
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addWatchMovies: (state, action) => {
      state.watchMovieDetails = action.payload;
    },
    addWatchVideo: (state, action) => {
      state.watchVideo = action.payload;
    },
    chnageInfoDisplay: (state, action) => {
      state.isInfoOpen = !state.isInfoOpen;
    }
  },
});

export const {
  addTrailerVideo,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addWatchMovies,
  addWatchVideo,
  chnageInfoDisplay
} = moviesSlice.actions;

export default moviesSlice.reducer;
