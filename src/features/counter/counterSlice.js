import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

//stateの初期値
const initialState = {
  value: 0,
  status: "idle",
};

//非同期のアクションについてはここで設定（createAsyncThunk）
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

//Sliceを識別するための名前
export const counterSlice = createSlice({
  name: "counter",
  //初期値を呼びだし
  initialState,
  //reducerの定義
  reducers: {
    //アクションがincrementの時+1する
    increment: (state) => {
      state.value += 1;
    },
    //アクションがdecrementの時-1する
    decrement: (state) => {
      state.value -= 1;
    },
    // actionのpayload（引数のようなもの）を受け取って、その値をstateに足す
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});
//3つのアクションをエクスポートしてコンポーネント内で使えるようにする
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// stateの中のcounter.valueをエクスポートしてコンポーネント内で参照できるようにする;
export const selectCount = (state) => state.counter.value;

//定義したreducerの属性をエクスポートしてstore内で参照できるようにする
//詳しい内容はsrc/app/store.jsを参照
export default counterSlice.reducer;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};
