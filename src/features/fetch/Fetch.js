import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncGet, selectUsers } from "./fetchSlice";

const Fetch = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  //useEffectは関数の実行タイミングをレンダリング後に遅らせるhook
  //useEffect(()=>{実行したい関数}, [dispatch])
  //第二引数を指定しない場合はレンダリング後に毎回実行される
  //第二引数がからの配列の場合は、マウント時とアンマウント時に実行
  //第二引数に値が入った配列を指定した場合は、マウント時と、第二引数の値に変化があった場合に実行
  useEffect(() => {
    dispatch(fetchAsyncGet());
  }, [dispatch]);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
};

export default Fetch;
