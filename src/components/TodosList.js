
const TodosList = ({todos,setTodos,setEditTodo}) =>{

   const handelComplete = (todo) => {
    setTodos(
        todos.map((item)=>{
            if(item.id === todo.id){
                return{...item,completed: !item.completed}
            } 
            return item;

        })
    )
   }

   const handelEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);

   }

   const handelDelete = ({id}) =>{
    setTodos(todos.filter((todo) => todo.id !== id)); 
   }

    return(
        <div>
        {todos.map((todo) => 
            (
                <li className="list-item" key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title}
                    className="list" 
                    onChange={(event) => event.preventDefault()}

                    /> 
                    <div>
                        <button className="button-complete task-button" onClick={() => handelComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                           
                        </button>

                        <button className="button-edit task-button" onClick={()=> handelEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>

                        <button className="button-delete task-button" onClick={()=> handelDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>
                   

                </li>
            )
        )}
        
        </div>

    )
}
export default TodosList;