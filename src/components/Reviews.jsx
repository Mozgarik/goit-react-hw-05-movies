import { useParams } from "react-router-dom";
import { useGetMovieRewiewsQuery } from "api/themoviedb"
import { Box } from 'components/Box';
import { ErrorToast } from 'components/ErrorToast';
import { Errors, Msg } from "components/Strings"

const Reviews = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieRewiewsQuery(movieId);

  if (isLoading) { return }
  if (error) { <ErrorToast msg={Errors.getMovieRewiewsError} />; return }

  return (data?.results.length ?
     <Box as="ul" ml={4}>
      {data.results.map(({ id, author, content }) => {
        return (
          <Box key={id} as="li" p={2}>
            <Box as="p" mt={3} mb={3}><b>Author: {author}</b></Box>
            {content}
          </Box>
        );
      }, "")}
    </Box>:
    <p>{Msg.noReviews}</p>)
}
export default Reviews;