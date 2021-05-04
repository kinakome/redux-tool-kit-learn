import React, { useState } from "react";
import { useDispatch } from "react-redux";
//アクションを読み込み
import { newTask } from "./taskSlice";

const TaskInput = () => {
  //ディスパッチ関数を生成
  const dispatch = useDispatch();
  //タイトルを管理するhooksのstateを作成
  const [editTitle, setEditTitle] = useState("");
  //テキストボックスの変更を検知
  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };
  //submitが押された時
  const handleSubmit = (e) => {
    e.preventDefault();
    //setEditTitleの値をdispatchする
    dispatch(newTask(editTitle));
    setEditTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editTitle}
        onChange={handleTitleChange}
        placeholder="Please type in"
      />
      <button>NEW</button>
    </form>
  );
};

export default TaskInput;
