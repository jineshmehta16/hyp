import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Toast from './js/common/toast';
import { connect } from 'react-redux';
import Footer from './js/component/footer';
import Header from './js/component/header';
import { getToast, getOverlay } from './js/store/common/selectors';
import LoadingOverlay from './js/common/overlay';
import SplashScreen from './js/component/splashScreen';
import ParkingGridContainer from './js/container/parkingGridContainer';

const Home = lazy(() => import('./js/container/home'));
const Login = lazy(() => import('./js/container/login'));
const ResetPassword = lazy(() => import('./js/container/resetPassword'));
const ParkingMap = lazy(() => import('./js/component/parkingMap'));

const AppRouter = (props) => {
  const { toast, overlay } = props;

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          {toast?.status && <Toast />}
          {overlay && <LoadingOverlay />}
          {true && <Header />}
          <Outlet />
          {true && <Footer />}
        </>
      ),
      children: [
        { path: '/', element: <Login /> },
        {
          path: 'parkingMap/:level',
          element: <ParkingMap />,
        },
        {
          path: '/dashboard',
          element: <Home />,
        },
        {
          path: '/resetPassword',
          element: <ResetPassword />,
        },
        {
          path: 'parkingGrid',
          element: <ParkingGridContainer />,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense fallback={<SplashScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

const mapSateToProps = (state) => {
  return {
    toast: getToast(state),
    overlay: getOverlay(state),
  };
};

export default connect(mapSateToProps, {})(React.memo(AppRouter));
