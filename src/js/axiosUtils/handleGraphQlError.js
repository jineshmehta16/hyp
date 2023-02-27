export const clearAndSignOut = () => {
  localStorage.clear();
  window.location.href = '/login';
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (error) => {
  const { extensions } = error;
  if (extensions) {
    let obj = {};
    switch (extensions.code) {
      case 'validation-failed':
        obj = {
          title: 'ERROR',
          message:
            'There was error in processing request(Validation Failed).Please try again later',
          status: true,
        };
        break;
      case 'invalid-jwt':
        obj = {
          title: 'ERROR',
          code: 401,
          message: 'Request you to please login to access the information',
          status: true,
        };
        clearAndSignOut();
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
