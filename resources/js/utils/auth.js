// import store from '@store/index';
import auth from "@api/auth";

/**
 * Tells whether the user is authenticated.
 *
 * @return {boolean}
 */
export const isLogged = () => {
  return new Promise(resolve => {
    auth
      .checkAuth()
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};
