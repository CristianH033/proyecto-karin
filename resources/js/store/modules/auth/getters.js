export default {
  logged: state => state.logged,
  attemptUser: state => state.attemptUser,
  verifiedOTP: state => state.otpverified,
  accessToken: state => state.accessToken,
  user: state => state.user,
  roles: state => (state.user ? state.user.roles : [])
};
