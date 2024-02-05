import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "@common";
import { PageDetails } from "./types";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getPageDetails = async (
  pageNumber: number
): Promise<PageDetails> => {
  const response: AxiosResponse<PageDetails> = await axiosInstance.get(
    `/data/page${pageNumber}.json`
  );
  return response.data;
};
