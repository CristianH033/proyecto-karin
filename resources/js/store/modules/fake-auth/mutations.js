import * as types from '../../mutation-types'

export default {
  [ types.FAKE_LOGGED ] (state, logged) {
    state.fakeLogged = logged
  }
}
