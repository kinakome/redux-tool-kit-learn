import { configureStore } from "@reduxjs/toolkit";

//Sliceをインポートしていく
import counterReducer from "../features/counter/counterSlice";
import taskReducer from "../features/task/taskSlice";
import fetchReducer from "../features/fetch/fetchSlice";

//storeはindex.js（アプリケーションルート）で呼び出している
export const store = configureStore({
  //複数のslice（およびreducer）がある場合は、ここに登録していく
  //combineReducersが裏で動いている
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    fetch: fetchReducer,
  },
});
