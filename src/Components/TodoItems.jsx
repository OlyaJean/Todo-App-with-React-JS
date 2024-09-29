import './Assets/CSS/TodoItems.css'
import check from './Assets/check.png'
import uncheck from './Assets/uncheck.png'
import deleteIcon from './Assets/delete.png'

//we are passing destrructuring props from TODO component

const TodoItems = ({no,display,text,setTodos}) => {

  const deleteTodo = (no)=>{
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((todo)=>todo.no !== no);
    setTodos(data)
  }

  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem('todos'));
    for(let i = 0; i < data.length;i++){
      if(data[i].no === no){
        if(data[i].display ===''){
          data[i].display = 'line-through'
        }else{
          data[i].display = ''
        }
        break;
      }
    }
    setTodos(data)
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={uncheck} alt="" /> : <img src={check} alt="" />}
       
        <div className="todoitems-text">{text}</div>
       
      </div>
      <img className='todoitems-cross' src={deleteIcon} alt="" onClick={()=>{deleteTodo(no)}}/>
    </div>
  )
}

export default TodoItems
