import { useContext } from "react";
import { TasksContext, TaskType } from "../App";
import { useNavigate } from "react-router-dom";

import "./forms.css";

interface TaskPropsI {
  task?: TaskType;
}

const Task: React.FC<TaskPropsI> = ({ task }: TaskPropsI) => {
  const navigate = useNavigate();
  const { deleteTask, changeTaskStatus } = useContext(TasksContext);
  const { title, comments, id, status } = task as TaskType;

  return (
    <div
      className={`${
        status ? "bg-gray-100" : "bg-white"
      } p-6 rounded-lg shadow-lg w-64 h-64 overflow-x-auto mb-6 relative`}
      onClick={() => {
        navigate(`/task_description/${id}`, { state: { title, comments, id } });
      }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <div className="absolute top-2 right-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 icon"
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/task_edit/${id}`, {
                state: { title, comments, id, status },
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </div>
        <div className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 icon"
            onClick={(event) => {
              event.stopPropagation();
              deleteTask(id);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <p className="text-gray-700">{comments}</p>

        <div className="form-control">
          <label className="label label-size">
            <div
              className="h-5 w-5"
              onClick={(event) => {
                event.stopPropagation();
                changeTaskStatus(id);
              }}
            >
              <input
                checked={status}
                type="checkbox"
                className="checkbox h-5 w-5"
                onChange={() => {}}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Task;
