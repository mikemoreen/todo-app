import { useContext, useState } from 'react';
import { TasksContext, TaskType } from '../App';
import { useNavigate } from "react-router-dom";

import './forms.css'
interface TaskPropsI {
    task?: TaskType
}


const Task: React.FC<TaskPropsI> = ({task}: TaskPropsI) =>{
    const navigate = useNavigate();

    const [checked, setChecked] = useState(false)
    const {deleteTask} = useContext(TasksContext) 
    const {title, comments, id} = task as TaskType

    console.log('checked',checked)
    return (
        <div className={`${checked ? "bg-gray-100" : "bg-white"} p-6 rounded-lg shadow-lg w-64 h-64 overflow-x-auto mb-6 relative`}
        onClick={()=>{
            navigate(`/task_description/${id}`, {state:{title, comments, id}})
            //:id
        }}
        >
            
            <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
                <div className="absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                     className="w-6 h-6 icon" onClick={(event)=>{
                        event.stopPropagation()
                        deleteTask(id)
                     }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            

                <p className="text-gray-700">{comments}</p>

                {/* checkbox */}
                <div className="form-control">
                    <label className="label label-size">
                        <input type="checkbox" className="checkbox h-5 w-5" onClick={(event)=>{
                            event.stopPropagation()
                            setChecked(!checked)}
                            }/>
                    </label>
                </div>
            </div>
            
        </div>
    )

}

export default Task;