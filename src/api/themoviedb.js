import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { KEY } from './themovie.key';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: builder => ({
    getTrending: builder.query({
      query: () => `trending/movie/day?api_key=${KEY}`,
    }),
    searchMovies: builder.query({
      query: text => `search/movie?api_key=${KEY}&query=${text}`,
    }),
    getMovieDetails: builder.query({
      query: id => `movie/${id}?api_key=${KEY}`,
    }),
    getMovieCredits: builder.query({
      query: id => `movie/${id}/credits?api_key=${KEY}`,
    }),
    getMovieRewiews: builder.query({
      query: id => `movie/${id}/reviews?api_key=${KEY}`,
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieCreditsQuery,
  useGetMovieRewiewsQuery,
} = movieApi;
