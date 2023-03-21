export const cleanUpAndSignOut = () => {
  localStorage.clear();
  window.location.href = '/';
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (error) => {
  const { response } = error;
  if (response) {
    let obj = {};
    switch (response.status) {
      case 500:
        obj = {
          title: 'ERROR',
          message:
            'There was error in processing request.Please try again later',
          status: true,
        };
        break;
      case 400:
        obj = {
          title: 'ERROR',
          message: 'Bad Requst',
          status: true,
        };
        break;
      case 404:
        obj = {
          title: 'Resource You are trying to access is not available',
          message: '',
          status: true,
        };
        break;
      case 401:
        obj = {
          title: 'ERROR',
          message: 'UNAUTHROISED',
          status: true,
        };
        cleanUpAndSignOut();
        break;
      default:
        obj = {
          title: 'ERROR',
          message:
            'There was error in processing request.Please try again later',
          status: true,
        };
    }
    return obj;
  }
  return null;
};
