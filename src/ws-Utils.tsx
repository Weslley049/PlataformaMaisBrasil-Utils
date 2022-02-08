import { find } from "lodash";
import { v4 as uuidv4 } from "uuid";

import { ValidLogins } from "./utils/constants";

export function ValidateLogin(login: string, senha: string) {
  if (find(ValidLogins, { login, senha })) {
    generateToken();
  }

  return false;
}

function generateToken() {
  const token = uuidv4();
  localStorage.setItem("@token", token);

  console.log(token);

  return true;
}
