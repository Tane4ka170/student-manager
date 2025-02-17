import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["accessToken", "user"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  students: studentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(storage);
