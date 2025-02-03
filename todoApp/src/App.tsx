import { useState } from 'react'
import { Todo } from './types'
import AddTodo from './AddTodo'

const initialTodos: Todo[] = []

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [id, setId] = useState(0)

  function handleAddTodo(title: string) {
    if (title) {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: id + 1,
          title,
          isDone: false
        }
      ])
      setId(id + 1)
    }
  }

  return (
    <>
      <h1>todoApp</h1>
      <AddTodo onAddTodo={handleAddTodo} />
    </>
  )
}

export default App
