import axios from "axios";
import { users as usersAPI } from "@services/api.js";

const users = {
  fetch: () => {
    return axios.get(usersAPI);
  },
  update: user => {
    return axios.put("/api/v1/user", {
      name: user.name,
      email: user.email
    });
  }
};

export const fetch = users.fetch;
export const update = users.update;

export default users;
