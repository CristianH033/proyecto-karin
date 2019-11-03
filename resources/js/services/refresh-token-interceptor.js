import axios from "axios";
import auth from "@api/auth";
import refreshInterceptor from "axios-auth-refresh";
import store from "@store/index";
import * as mutations from "@store/mutation-types";

const refresLogic = request =>
  auth.refreshToken().then(response => {
    let accessToken = response.data.access_token;
    store.commit(mutations.ACCESS_TOKEN, accessToken);
    request.response.config.headers["Authorization"] = `Bearer ${accessToken}`;
    return Promise.resolve();
  });

refreshInterceptor(axios, refresLogic);
