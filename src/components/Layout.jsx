import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar';
import { Loader } from "components/Loader"

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};