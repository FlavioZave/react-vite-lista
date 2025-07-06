import { useState } from "react";
import Input from "./Input";

function AddTask({onAddTaskSubmit}) {
    //Criação de States para title e description.. poderia criar para mais coisas 
    //useState("") vazio por padrão
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input type="text" placeholder="Digite o titulo da tarefa" 
                
                value={title} 
                onChange={(event) => setTitle(event.target.value)}></ Input>
                
            <Input type="text" placeholder="Digite a descrição da tarefa"
                
                value={description}
                 onChange={(event) => setDescription(event.target.value)}></ Input>
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                onClick={() => {

                        //Validação para não salvar sem nada digitado no campo
                        //.trim() para não aceitar nem espaços em branco
                        if(!title.trim() || !description.trim()) {
                            return alert("Favor preencher os campos!");
                        }
                        onAddTaskSubmit(title, description);
                        setTitle("");
                        setDescription("");
                    }}>
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;