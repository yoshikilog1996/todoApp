import { useRef, useState } from 'react'
import { Todo } from './types'
import AddTodo from './AddTodo'
import TaskList from './TaskList'


const initialTodos: Todo[] = []

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const idRef = useRef(0)

  function handleAddTodo(title: string) {
    if (title) {
      idRef.current += 1
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: idRef.current,
          title,
          isDone: false
        }
      ])
    }
  }

  function handleChangeTodo(todo: Todo) {
    setTodos(todos.map(t => (t.id === todo.id ? todo : t)))
  }

  function handleDeleteTodo(todo: Todo) {
    setTodos(todos.filter(t => t.id !== todo.id))
  }

  return (
    <>
      <h1>todoApp</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        handleChangeTodo={handleChangeTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}

export default App
