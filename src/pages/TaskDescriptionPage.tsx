import { useNavigate, useLocation } from "react-router-dom";
import React from 'react';

const TaskDescriptionPage: React.FC= () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log('state',state)
    return (
    <div>
        <div className="flex flex-col items-center justify-center space-y-4">
            <div>
            <label className="">
            Task Description
            </label>
            </div>
            <h2>Title</h2>
            <div className="w-96">
                <p>
                    asdasd asds  asdasd asds  asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds 
                    asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds 
                    asdasd asds asdasd asds asdasd asds 
                </p>
            </div>
            <h2>Comments</h2>
            <div className="w-96">
                <p>
                    asdasd asds  asdasd asds  asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds 
                    asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds asdasd asds 
                    asdasd asds asdasd asds asdasd asds 
                </p>
            </div>
            {/* Кнопки */}
            <div>
            <div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border 
                    border-gray-400 rounded shadow"
                    onClick={()=>{
                        navigate(-1)
                    }}
                    >
                    Back
                </button>
            </div>
        </div>
        
        </div>
    </div>
  )
    
}
export default TaskDescriptionPage;