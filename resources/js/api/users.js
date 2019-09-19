import axios from "axios";
import { users } from "@services/api.js";

export default {
  fetch() {
    return axios.get(users);
  },
  update(user) {
    return axios.put("/api/v1/user", {
      name: user.name,
      email: user.email
    });
  }
};
