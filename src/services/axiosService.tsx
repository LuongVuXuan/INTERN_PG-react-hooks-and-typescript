import axios from "axios";

class AxiosService {
  instance: any;
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response: any) {
    return response;
  }

  handleError(error: any) {
    return Promise.reject(error);
  }

  get(url: any) {
    return this.instance.get(url);
  }
}

export default new AxiosService();
