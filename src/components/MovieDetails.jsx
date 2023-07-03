import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { MovieDetailsNav } from "components/MovieDetailsNav";
import { Loader } from "components/Loader"

export const MovieDetails = () =>
<Box pt={4} pb={4}>
  <Box as="p" mb={2}>Additional information</Box>
  <MovieDetailsNav />
  <Suspense fallback={<Loader/>}>
    <Outlet />
  </Suspense>
</Box>