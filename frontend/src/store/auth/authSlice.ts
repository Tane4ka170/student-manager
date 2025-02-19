import { TLoading } from "@/types/shared.types";
import { createSlice } from "@reduxjs/toolkit";
import authRegister from "./actions/authRegister";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface IAuthState {
  loading: TLoading;
  error: string | null;
  accessToken: string | null;
  user: IUser | null;
}

const initialState: IAuthState = {
  loading: "idle",
  error: null,
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
  },
});

export { authRegister, authLogin };
export default authSlice.reducer;
