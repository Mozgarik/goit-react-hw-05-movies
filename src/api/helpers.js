export const genresHelper = genres => {
  return genres.reduce(function (text, { name }) {
    return text + ' ' + name;
  }, '');
};

export const movieInfoHelper = data => {
  const { title, overview, vote_average, poster_path, genres } = data;
  const score = Math.round(vote_average * 10);
  const genresString = genresHelper(genres);
  return { title, overview, score, poster_path, genresString };
};
