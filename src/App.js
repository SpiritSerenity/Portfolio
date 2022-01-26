import React, { useState, useRef, useEffect} from 'react';
import'./App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const LOCAL_STORAGE_KEY = 'todoApp.todoArray'

function App(){
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()



  useEffect(() => {
   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if (storedTodos) setTodos(storedTodos)
}, [])
  useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id) {
   const newTodos = [...todos]
   const todo = newTodos.find(todo => todo.id === id)
   todo.complete = !todo.complete
   setTodos(newTodos)
  }

  function handleAddTodo(e) {
   const name = todoNameRef.current.value
   if (name === '') return
   setTodos(prevTodos => {
         return [...prevTodos, {id: uuidv4(), name:name, complete:false}]
      }) 
   todoNameRef.current.value = null
  }

  function handleClearTodos(){
     const newTodos = todos.filter(todo => !todo.complete)
     setTodos(newTodos)
  }

 return (
    <>
    <TodoList todoArray={todos} toggleTodo={toggleTodo} />
    <input ref ={ todoNameRef }type = "text"/>
    <Button onClick={handleAddTodo} variant ='contained' color = "secondary" >Add Todo</Button>
    <Button onClick = {handleClearTodos} variant ='contained' color = "secondary">Clear Completed</Button>
    <div>{todos.filter(todo => !todo.complete).length}</div>
    </>
 )  
}

export default App;
