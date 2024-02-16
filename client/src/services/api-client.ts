import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then(res => res.data);
  }

  post = (data: T) => {
    return axiosInstance.post(this.endpoint, data).then((res) => res.data);
  };
}

export { AxiosError };
export default APIClient;
