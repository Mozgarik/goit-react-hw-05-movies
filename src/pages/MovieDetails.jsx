import { BsReplyFill } from "react-icons/bs";
import { Box } from 'components/Box';
import { MovieCard } from "components/MovieCard"
import { Link,useLocation } from "react-router-dom";

const MovieDetails = () => {
    const {state} = useLocation();
    const path = state ? state.pathname + state.search : "/";
    
    return <Box as="main">
        <Box as="button" type="button" display="flex" alignItems="center" m={2}>
            <Link to={path}><BsReplyFill />Go Back</Link>
        </Box>
        <MovieCard />
    </Box>
}
export default MovieDetails;