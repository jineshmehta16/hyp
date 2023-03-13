import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import Toast from './js/common/toast';
import { connect } from 'react-redux';
import Footer from './js/component/footer';
import HeaderBanner from './js/component/headerBanner';
import { getToast, getOverlay } from './js/store/common/selectors';
import LoadingOverlay from './js/common/overlay';
import GlobalStyles from './js/hooks/globalStyles';
import SplashScreen from './js/component/splashScreen';
import ParkingMap from './js/component/parkingMap';

const Home = lazy(() => import('./js/container/home'));
const Login = lazy(() => import('./js/container/login'));

const AppRouter = (props) => {
  const { toast, overlay } = props;

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          {toast?.status && <Toast />}
          {<GlobalStyles />}
          {overlay && <LoadingOverlay />}
          {true && <HeaderBanner />}
          <Outlet />
          {true && <Footer />}
        </>
      ),
      children: [
        { path: '/', element: <Home /> },
        {
          path: 'parkingMap/:level',
          element: <ParkingMap />,
        },
      ],
    },

    {
      path: 'login',
      element: (
        <>
          {toast?.status && <Toast />}
          {<GlobalStyles />}
          {overlay && <LoadingOverlay />}
          <Login />
        </>
      ),
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
