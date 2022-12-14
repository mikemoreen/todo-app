import Task from "./Task";
import { TaskType, TasksContext } from "../App";
import { useContext } from "react";

const Tasks: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="flex items-center justify-center w-[70rem] space-x-4 mt-6 h-auto flex-wrap">
      {tasks?.map((el: TaskType) => {
        return <Task task={el} key={el.id} />;
      })}
    </div>
  );
};
export default Tasks;
