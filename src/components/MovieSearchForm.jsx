import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const MovieSearchForm = ({disabled}) => {
    const { register, handleSubmit } = useForm();
    const [, setSearchParams] = useSearchParams();

    const onSubmit = data => setSearchParams({ query: data.filmName });
    
    return (
    <Box m={2} as="form" onSubmit={handleSubmit(onSubmit)}>
    <input {...register("filmName")} />
        <button type="submit" disabled={disabled}>Search</button>
    </Box>
    );
};
Notification.MovieSearchForm = PropTypes.shape({
  disabled: PropTypes.bool
})