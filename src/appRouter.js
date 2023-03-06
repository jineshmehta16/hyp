import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Toast from './js/common/toast';
import { connect } from 'react-redux';
import Footer from './js/component/footer';
import Header from './js/component/header';
import { getToast, getOverlay } from './js/store/common/selectors';
import LoadingOverlay from './js/common/overlay';
import GlobalStyles from './js/hooks/globalStyles';
import SplashScreen from './js/component/splashScreen';

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
          {true && <Header />}
          Hello.....
          {true && <Footer />}
        </>
      ),
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'about',
      element: <div>About</div>,
    },
  ]);

  return (
    <>
      <React.Suspense fallback={<SplashScreen />}>
        <RouterProvider router={router} />
      </React.Suspense>
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
