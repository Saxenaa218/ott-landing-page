import { atom } from "jotai";
import { PageDetails } from "src/api/types";

export const pageDetailsAtom = atom<PageDetails | null>(null);
export const searchTextAtom = atom<string>("");
