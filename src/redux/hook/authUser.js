import { userApiSlice } from "../../features/user/userApiSlice";
import { getFromLocalStorage } from "../../utils/tokenHandle";
import { store } from "../stores";

export const useAuthUser = () => {
  const state = userApiSlice.endpoints.getUser.useQueryState(null);
  console.log(state)
  return state.data?.user || undefined;
};
