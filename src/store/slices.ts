import { StoreApi } from "zustand";
import { GlobalState } from "./state";
import axios from "axios";

export const createChecksumAddressSlice = (
  set: (
    partial:
      | Partial<GlobalState>
      | ((state: GlobalState) => Partial<GlobalState>)
  ) => void,
  _get: () => unknown,
  _: StoreApi<unknown>
) => ({
  toChecksumAddress: "",
  setToChecksumAddress: (address: string) =>
    set((state) => ({ ...state, toChecksumAddress: address })),
});
