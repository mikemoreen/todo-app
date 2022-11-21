import { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const CardForm: React.FC = () =>{
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
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
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
                    onClick={()=>navigate("/", {
                        state: {title, comments},
                        replace: false,
                      })}
                    >
                    Create
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
export default CardForm;