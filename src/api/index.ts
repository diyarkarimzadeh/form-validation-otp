import axios from "axios";
import { BASE_URL, DEFAULT_HEADERS } from "./endpoints";

interface GetProps {
  url: string;
  params?: object;
  headers?: object;
}

interface PostProps {
  url: string;
  data?: object;
  params?: object;
  headers?: object;
}

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15 * 1000,
});

const http = {
  get: ({ url, params = {}, headers = DEFAULT_HEADERS }: GetProps) => {
    return axiosClient.get(url, { params, headers });
  },
  post: ({
    url,
    data = {},
    params = {},
    headers = DEFAULT_HEADERS,
  }: PostProps) => {
    return axiosClient.post(url, data, { params, headers });
  },
};

export default http;
