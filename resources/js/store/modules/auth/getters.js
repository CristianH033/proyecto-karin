export default {
  logged: state => state.logged,
  accessToken: state => state.accessToken,
  user: state => state.user,
  roles: state => (state.user ? state.user.roles : [])
};
