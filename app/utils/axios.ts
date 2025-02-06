import axios, { AxiosRequestConfig } from "axios";
// config
import { BASE_API_URL } from "../config-global";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: BASE_API_URL ?? "http://localhost:4000/api/v1",
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  note: {
    list: "/note",
    create: "/note",
    getOne: (id: string) => `/note/${id}`,
    delete: (id: string) => `/note/${id}`,
    update: (id: string) => `/note/${id}`,
  },
};
