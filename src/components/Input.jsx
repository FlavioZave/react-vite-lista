function Input(props) {
    /*  UMA MANEIRA DE ESTILIZAR OS INPUTS SEM PRECISAR TER QUE ESTILIZANDO UM POR UM */
    return (
        <input
         //type={props.type}
         //placeholder={props.placeholder}
         className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
         //value={props.value}
         //onChange={props.onChange}></input>

         //PASSAR TUDO DE UMA SO VEZ COM PROPS OS CODIGOS COMENTADOS ACIMA
         {...props} ></input>
    );
}

export default Input;