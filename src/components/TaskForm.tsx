import { useState, useContext } from "react";
import { Textarea } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import { TasksContext } from '../App';

import uniqid from 'uniqid';

const TaskForm: React.FC = () =>{
    const {tasks, addTask} = useContext(TasksContext) 

    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [comments, setComments] = useState('');

    return (
    <div className="flex flex-col items-center justify-center space-y-4">
          <div>
            <label className="">
            Task
            </label>
          </div>
          <div className="w-96">

            <input type="text" value={title} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            " onChange={e => setTitle(e.target.value)} placeholder="title"/>
          </div>
          <div className="w-96">
            <Textarea  placeholder="comments..."
            value={comments}
            onChange={e => setComments(e.target.value)}
            />
          </div>
          
          {/* Кнопки */}
          <div className="flex items-center justify-center space-x-4">
            <div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border 
                    border-gray-400 rounded shadow"
                    onClick={()=>{
                      const id = uniqid()
                      addTask({title, comments, id})
                      navigate("/")
                    }}
                    >
                    Save
                </button>
            </div>
            <div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border 
                    border-gray-400 rounded shadow"
                    onClick={()=>navigate("/")}
                    >
                    Back
                </button>
            </div>
          </div>
          
    </div>
    )
}
export default TaskForm;