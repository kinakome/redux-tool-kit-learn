import React from "react";
import TaskItem from "./TaskItem";
//stateをインポート
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";

const TaskList = () => {
  // stateの値をローカル変数に代入;
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
