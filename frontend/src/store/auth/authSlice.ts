import { TLoading } from "@/types/shared.types";
import { createSlice } from "@reduxjs/toolkit";
import authRegister from "./actions/authRegister";
import { isString } from "@/types";
import authLogin from "./actions/authLogin";

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
  reducers: {
    cleanUI: (state) => {
      state.loading = "idle";
      state.error = "";
    },
    authLogout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(authRegister.fulfilled, (state) => {
      state.loading = "succeed";
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    //   Login
    builder.addCase(authLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loading = "succeed";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { authRegister, authLogin };
export default authSlice.reducer;
