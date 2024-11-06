import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask } from '../store/TodoSlice'
import Typed from 'typed.js';

const Home = () => {
    let todoSlice = useSealector((state)=>state.todo)
    console.log(todoSlice)
    let dispatch = useDispatch()
    let inputRef = useRef()

    const el =useRef(null);
    React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['This is TodoList'],
        typeSpeed: 100,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);


  
  return (
    <div style={{backgroundColor:"rgb(0,0,0,0.2)", padding:"40px"}}>
      <h1>THis is Home</h1>

      <div >
        <input ref={inputRef} type="text" style={{padding:"5px 10px"}} placeholder='enter a task' />
        <button onClick={()=>dispatch(addTask(inputRef.current.value))}>Add Task</button>
      </div>

      {
        todoSlice.arr.map((ele,i)=>{
            return <div className='' style={{display:'flex', gap:"40px"}}>
                <p style={{backgroundColor:ele.status==='completed'?'green': 'red'}}>{ele.task}</p>
                <p>{ele.status}</p>
                <button onClick={()=>dispatch(deleteTask(ele,i))}>Delete Task</button>
                <button >Update Status</button>
            </div>
        })
      }
    </div>
  )
}

export default Home