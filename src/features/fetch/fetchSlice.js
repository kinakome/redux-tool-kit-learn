import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

//createAsyncThunkは非同期処理を行う場合に使う
//第一引数でアクション名を指定する（Slice名/メソッド名とすることが多い）
export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
  // 実際にapiを叩く
  const res = await axios.get(apiUrl);
  return res.data;
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState: { users: [] },
  reducers: {},
  //非同期のアクションはextraReducersに書く
  extraReducers: (builder) => {
    //createAsyncThunkは成功したかどうかで、[fulfiled,pending,rejected]を返す
    //fetchAsyncGetが成功した場合
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        //res.dataで返された値がaction.payloadに入っている
        users: action.payload,
      };
    });
  },
});

// state内のusersを参照できるようにエクスポート
export const selectUsers = (state) => state.fetch.users;
export default fetchSlice.reducer;
