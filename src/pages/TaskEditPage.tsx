import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Textarea } from "@material-tailwind/react";
import { TasksContext } from "../App";

const TaskEditPage: React.FC = () => {
  const { editTask } = useContext(TasksContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { title, comments, id, status } = state;
  const [newTitle, setNewTitle] = useState(title);
  const [newComments, setNewComments] = useState(comments);
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div>
          <label className="">Task Edit</label>
        </div>
        <div className="w-96">
          <input
            type="text"
            value={newTitle}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            "
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="title"
          />
        </div>
        <div className="w-96">
          <Textarea
            placeholder="comments..."
            value={newComments}
            onChange={(e) => setNewComments(e.target.value)}
          />
        </div>

        {/* Кнопки */}
        <div className="flex items-center justify-center space-x-4">
          <div>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border 
                    border-gray-400 rounded shadow"
                onClick={() => {
                  editTask({ title: newTitle, comments: newComments, id, status });
                  navigate("/");
                }}
            >
              Save Changes
            </button>
          </div>
          <div>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border 
                    border-gray-400 rounded shadow"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskEditPage;
