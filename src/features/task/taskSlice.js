import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//stateの初期値
const initialState = {
  idCount: 3,
  tasks: [
    { id: 3, title: "task a", completed: true },
    { id: 2, title: "task b", completed: true },
    { id: 1, title: "task c", completed: false },
  ],
};

//Sliceを識別するための名前
export const taskSlice = createSlice({
  name: "task",
  //初期値を呼びだし
  initialState,
  //reducerの定義
  reducers: {
    newTask: (state, action) => {
      //最新のidに+1する
      state.idCount++;
      // payloadを元に新しいアイテムを作成する
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      // tasksの最初にアイテムを追加する;
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action) => {
      // payloadで渡されたidに該当するidを持つタスクがある場合
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      // payloadで渡されたidに一致するtaskをfilterで除外する
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});
//3つのアクションをエクスポートしてコンポーネント内で使えるようにする
export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

//定義したreducerの属性をエクスポートしてstore内で参照できるようにする
//詳しい内容はsrc/app/store.jsを参照
export default taskSlice.reducer;
