import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

    //Para a gente navegar entre paginas com react-route-dom
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task, index) => (
                <li key={task.id}className="flex gap-2">
                    <button onClick={() => onTaskClick(task.id)} className={`bg-slate-400 text-white p-2 rounded-md w-full flex items-center gap-2 text-left ${task.isCompleted && "line-through"}`}>
                        {task.isCompleted && <CheckIcon></CheckIcon>}
                        <span className="font-bold">{index + 1}.</span>
                        {task.title}
                    </button>
                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 p-2 rounded-md text-white ">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white ">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;