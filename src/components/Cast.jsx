import { useParams } from "react-router-dom";
import { useGetMovieCreditsQuery } from "api/themoviedb"
import { CastList } from "components/CastList"
import { ErrorToast } from "components/ErrorToast"
import { Errors, Msg } from "components/Strings"

const Cast = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieCreditsQuery(movieId);

  if (isLoading) { return }
  if (error) { <ErrorToast msg={Errors.getMovieCreditsError} />; return }

  return (data?.cast.length?<CastList casts = {data.cast } />:<p>{Msg.noCasts}</p>)
}  

export default Cast;
