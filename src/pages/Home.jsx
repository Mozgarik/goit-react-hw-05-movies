import { ErrorToast } from "components/ErrorToast"
import { Errors } from "components/Strings"
import { Box } from 'components/Box';
import { Loader } from "components/Loader"
import { MovieList } from "components/MovieList"
import { useGetTrendingQuery } from "api/themoviedb"

const Home = () => {
    const { data, error, isLoading } = useGetTrendingQuery();

    if (isLoading) { return <Loader/>}
    if (error) { <ErrorToast msg={Errors.getTrendingError} />; return }
    
    return (
        <Box as="main">
            {data && <MovieList movies={data.results} title="Trending today" route="movies/" />}
        </Box>);
}
export default Home;