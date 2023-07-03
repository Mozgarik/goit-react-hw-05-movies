import { useParams } from "react-router-dom";
import { MovieInfo } from 'components/MovieInfo';
import { MovieDetails } from "components/MovieDetails"
import { ErrorToast } from "components/ErrorToast"
import { Errors } from "components/Strings"
import { useGetMovieDetailsQuery } from "api/themoviedb"
import { movieInfoHelper } from "api/helpers"

export const MovieCard = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieDetailsQuery(movieId);

  if (isLoading) { return }
  if (error) { <ErrorToast msg={Errors.getMovieDetailsError} />; return }

  return (
    <>
    <MovieInfo {...movieInfoHelper(data)} />
    <MovieDetails />
    </>
  );}