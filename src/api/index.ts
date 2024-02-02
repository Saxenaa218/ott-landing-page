import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "@common";
import { PageDetails } from "./types";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getPageDetails = async (): Promise<PageDetails> => {
  const response: AxiosResponse<PageDetails> = await axiosInstance.get(
    "/data/page1.json"
  );
  return response.data;
};
