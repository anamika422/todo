import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  arr:[
    {
        id:1,
        task:"HTML Study",
        status:"inCompleted"
    },
    {
        id:2,
        task:"CSS Study",
        status:"completed"
    },
    {
        id:3,
        task:"JS Study",
        status:"inCompleted"
    },
  ]
}


export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    deleteTask:(state,action)=>{
        console.log(action.payload)
        let filterArr = state.arr.filter((ele)=>ele.id !== action.payload.id);
        // console.log(filterArr)
        state.arr = filterArr
    },
    addTask:(state,action)=>{
      console.log(action.payload)
      let obj = {
        task:action.payload,
        status:'inCompleted'
      }
      state.arr.push(obj)
    }
  },
})

// Action creators are generated for each case reducer function
export const { deleteTask ,addTask } = TodoSlice.actions

export default TodoSlice.reducer