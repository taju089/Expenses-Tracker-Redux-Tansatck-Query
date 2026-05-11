import axios from "axios";
import { Base_URL } from "../../utils/urls";
import api from "../auth/client";

export const loginApi = async ({ email, password }) => {
  const result = await axios.post(`${Base_URL}/user/login`, {
    email,
    password,
  });
  return result;
};

export const signinApi = async ({ email, password, username }) => {
  const result = await axios.post(`${Base_URL}/user/register`, {
    email,
    password,
    userName: username,
  });
  return result;
};

export const updateProfileApi = async ({ email, username }) => {
  const result = await api.put(`/user/changeProfile`, {
    email,
    userName: username,
  });
  return result;
};

export const updatePasswordApi = async ({ password }) => {
  const result = await api.put(`/user/password`, {
    password,
  });
  return result;
};

export const getProfileDetailsApi = async () => {
  const result = await api.get(`/user/profile`, {});
  return result.data;
};
