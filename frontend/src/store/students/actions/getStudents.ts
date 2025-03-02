import BaseURL from "@/apis/BaseURL";
import { RootState } from "@/store";
import { TStudent } from "@/types";
import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TResponse = TStudent[];

const getStudents = createAsyncThunk(
  "auth/getStudents",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      const response = await BaseURL.get<TResponse>(
        `/students?userId=${auth.user?.id}`,
        { signal } // abort request
      );

      if (!response.data.length) {
        return fulfillWithValue([]);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default getStudents;
