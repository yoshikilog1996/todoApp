import { useState } from 'react'
import { Todo } from './types'
import AddTodo from './AddTodo'

const initialTodos: Todo[] = []
let id = 0

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  function handleAddTodo(title: string) {
    if (title) {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: ++id,
          title,
          isDone: false
        }
      ])
    }
  }

  return (
    <>
      <h1>todoApp</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
