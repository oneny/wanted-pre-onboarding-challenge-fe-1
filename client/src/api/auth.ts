import { AxiosError } from "axios";
import axios from "./axios"

export const signin = async (email: string, password: string) => {
  try {
    const { data } = await axios.post('/users/login', {
      email,
      password
    });
    console.log(data);
  } catch (err: unknown) {
    console.log(err as AxiosError);
    return (err as AxiosError).response?.data;
  }
}