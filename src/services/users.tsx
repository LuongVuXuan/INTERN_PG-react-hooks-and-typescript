import axiosService from "./axiosService";

export const fetchListUser = async (url: any) => {
  return await axiosService.get(url);
};
