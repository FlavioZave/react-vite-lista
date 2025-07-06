import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

  function App () {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Trabalhando com API's (Aula não aprofundda no assunto)
  //função que só sera executada na primeira vez que o usuario acessar aplicação
  /*useEffect(() => {
      const fetchTasks = async() => {
          //CHAMAR API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', { //limitar para trazer só 10 tarefas
          method: 'GET'
        }); 
        
        //PEGAR DADOS QUE ELA RETORNA
        const data = await response.json();

        //ARMAZENAR/PERSISTIR DADOS NO STATE
        setTasks(data);
    }
    fetchTasks();
  }, []);

  */

  //FUNÇÃO DE ATUALIZAR A TAREFA SE FEITA OU NÃO
  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      //Preciso atualizar essa tarefa
      if(task.id ==taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      //Não preciso atualizar essa tarefa
      return task;
    });

    //para setar(receber) a lista atualizada
    setTasks(newTasks);
  }

  //FUNÇÃO DE DELETAR A TAREFA
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)  //TESTE DE OPÇÃO DE DIFERENTE SE FUNCIONA !=
    setTasks(newTasks);
  }

  //FUNÇÃO DE ADD TASKS
  function onAddTaskSubmit(title, description) {
    const newTask = {
        //Usando task.length + 1 ele pega o ultimo numero id criado e acrescenta +1 sempre tornando um id unico 
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    }
    setTasks([... tasks, newTask])
  }


  return(
    <div className="w-screen h-screen flex justify-center p-6 bg-pink-300">
        <div className="w-[500px] space-y-4">
          <Title> Gerenciador de Tarefas </ Title>
          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
        </div>
        
    </div>
  )
}

export default App;
