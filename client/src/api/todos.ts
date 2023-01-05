import { axiosPrivate } from "./axios";

export const getTodosRequest = async () => {
  return axiosPrivate.get('/todos');
}