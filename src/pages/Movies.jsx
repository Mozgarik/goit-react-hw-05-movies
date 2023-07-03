import { toast } from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";
import { useSearchMoviesQuery } from "api/themoviedb"
import { Box } from 'components/Box';
import { MovieList } from "components/MovieList"
import { MovieSearchForm } from "components/MovieSearchForm"

const Movies = () => {
  const [searchParams] = useSearchParams();
  const filmName = searchParams.get("query");

  const { data, error, isLoading } = useSearchMoviesQuery(filmName,{skip:!filmName,});
  
  if (error) { toast.error("SearchMoviesError");}
  return (
    <Box as="main">
      <MovieSearchForm disabled={isLoading} />
      {data && !error && <MovieList movies={data.results} />}
    </Box>
  );
};
export default Movies;